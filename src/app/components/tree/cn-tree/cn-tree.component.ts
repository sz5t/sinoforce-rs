import {Component, Input, OnInit} from '@angular/core';
import {ITreeNode} from "../tree-models/tree-node-model";
import {CommonUtility, NewSafeObservable} from "../../../framework/utility/common-utility";
import {ApiService} from "../../../services/api.service";
import {isNullOrUndefined} from "util";

declare let $:any;
@Component({
  selector: 'cn-tree',
  templateUrl: './cn-tree.component.html',
  styleUrls: ['./cn-tree.component.css']
})
export class CnTreeComponent implements OnInit {

  @Input() treeConfig;
  _rootConfigs;
  _childrenConfigs;
  _rootNodes:ITreeNode[] = [];
  _jsTree;
  private NodeFlag = {
    STATIC_NODE:"SFDW_Classes.TStaticTreeNodeConfig",
    DYNAMIC_NODE:"SFDW_Classes.TDynaTreeNodeConfig",
    CHILDREN_NODE:"SFDW_Classes.TTreeNodeChildrenConfig"
  };
  constructor(private apiService:ApiService) {
  }

  ngOnInit() {
    this.buildTree();
  }
  buildTree(){
    this._rootConfigs = this.treeConfig.viewCfg.rootConfigs;
    this._childrenConfigs = this.treeConfig.viewCfg.childConfigList;
    let promiseList = [];
    this._rootConfigs.forEach(root =>{
      if(root.classType && root.classType === this.NodeFlag.STATIC_NODE){
        promiseList.push({'func':this.createRootStaticNode,'param':root});
      }else if(root.classType && root.classType === this.NodeFlag.DYNAMIC_NODE){
        promiseList.push({'func':this.createRootDynamicNode,'param':root});
      }
    });
    Promise.all((() => {
      let list:any[] = [];
      let that = this;
      promiseList.forEach(item =>{
        list.push(item.func(item.param,that));
      });
      return list;
    })()).then(result => {
      $('#cnTree').jstree({
        'core': {
          'themes': {
            'responsive': false
          },
          'check_callback': true,
          'data':result[0]
        }
        // 暂定不进行一下相关内容的配置解析
        /*'types': NodeType.nodeType,
         'plugins': ['types', 'wholerow', 'contextmenu'],
         contextmenu: {
         'items': function (node) {
         const type = this.get_type(node);
         const t_node = NodeType[type];
         createAction(t_node, type);
         return t_node;
         }
         }*/
      });
      this._jsTree = $('#cnTree').jstree(true);
      $('#cnTree').on('open_node.jstree', (event,openNode) => {
        let funcList = [];
        let nodeTypesConfig = openNode.node.data;
        console.log(openNode);
        // delete openNode children
        this._jsTree.delete_node(this._jsTree.get_children_dom(openNode.node));

        if(nodeTypesConfig.isRoot){
          nodeTypesConfig.value && nodeTypesConfig.value.forEach(nodeType =>{
            if(nodeType.classType === this.NodeFlag.STATIC_NODE){
              const createStaticChildNode = () => {
                return new Promise(resolve =>{
                  setTimeout(()=>{
                    let openChildrenNodes:ITreeNode[]=[];
                    let newStaticNode:ITreeNode = {
                      id:       'nodeId_' + CommonUtility.uuID(5),
                      parent:   openNode.node.id,
                      text:     nodeType.nodeText ? nodeType.nodeText : '未命名节点',
                      icon: nodeType.icon ? nodeType.icon : '',
                      state: nodeType.state ? nodeType.state: {
                        opened: false,
                        disabled: false,
                        selected: false,
                      }
                    };
                    openChildrenNodes.push(newStaticNode);
                    // if exists nodeTypes and add a child node as child node flag
                    if(nodeType.nodeTypes){
                      newStaticNode.data = {
                        value:nodeType.nodeTypes,
                        isRoot:true
                      };
                      openChildrenNodes.push({id:'nodeId_' + CommonUtility.uuID(5),text:'',parent:newStaticNode.id});
                    }
                    // sync write a node to openChildrenNodes
                    resolve(openChildrenNodes);
                  },0);
                });
              };
              funcList.push(createStaticChildNode);
            }
            else if(nodeType.classType === this.NodeFlag.DYNAMIC_NODE){
              const createDynamicChildNode = () =>{
                return new Promise(resolve =>{
                  setTimeout(()=>{
                    let nodeCondition = '';
                    let openChildrenNodes:ITreeNode[]=[];
                    nodeType.arameters && nodeType.parameters.forEach(parameter => {
                      nodeCondition += parameter+"&";
                    });
                    console.log(nodeTypesConfig);
                    nodeType.filters && nodeType.filters.forEach(filter => {
                      filter.propLinks && filter.propLinks.forEach(link => {
                        nodeCondition += link.slaveProp+"="+nodeTypesConfig.parentItemNode[link.masterProp]+"&";
                      });
                    });
                    this.apiService.doList(nodeType.entityClass+"?"+nodeCondition)
                      .toPromise()
                      .then(response =>{
                        response.forEach(item =>{
                          let newDynamicNode:ITreeNode = {
                            id : 'nodeId_' + CommonUtility.uuID(5),
                            parent : openNode.node.id,
                            text : item[nodeType.textKey],
                          };
                          openChildrenNodes.push(newDynamicNode);
                          this._childrenConfigs && this._childrenConfigs.forEach(childConfig =>{
                            if(childConfig.classType === this.NodeFlag.CHILDREN_NODE){
                              if(childConfig.entityClass === nodeType.entityClass){
                                // 子节点集合中与根节点集合匹配的动态元素
                                if(childConfig.nodeTypes){
                                  newDynamicNode.data = {
                                    value : childConfig.nodeTypes,
                                    isRoot : false,
                                    idKey : childConfig.idkey,
                                    parentItemNode:item
                                  };
                                  openChildrenNodes.push({
                                    id:'nodeId_' + CommonUtility.uuID(5),
                                    text:'',
                                    parent:newDynamicNode.id
                                  });
                                }
                              }
                            }
                          });
                        });
                        resolve(openChildrenNodes);
                      });
                  },10);

                });
              };
              funcList.push(createDynamicChildNode);
            }
          });
        }
        else{
          nodeTypesConfig.value && nodeTypesConfig.value.forEach(nodeType =>{
            if(nodeType.classType === this.NodeFlag.STATIC_NODE){
              const createStaticChildNode = () => {
                return new Promise(resolve =>{
                  let openChildrenNodes:ITreeNode[]=[];
                  //添加新节点
                  let newStaticNode:ITreeNode = {
                    id : 'nodeId_' + CommonUtility.uuID(5),
                    text : nodeType.nodeText ? nodeType.nodeText : '未命名节点',
                    parent : openNode.node.id
                  };
                  openChildrenNodes.push(newStaticNode);
                  if(nodeType.nodeTypes){
                    let newChildNode:ITreeNode = {
                      id : 'nodeId_' + CommonUtility.uuID(5),
                      text : '',
                      parent : newStaticNode.id
                    };
                    newStaticNode.data = {
                      value:nodeType.nodeTypes,
                      isRoot:false,
                      parentItemNode:nodeTypesConfig.parentItemNode?nodeTypesConfig.parentItemNode:null
                    };
                    openChildrenNodes.push(newChildNode);
                  }
                  resolve(openChildrenNodes);
                });
              };
              funcList.push(createStaticChildNode);
            }
            else if(nodeType.classType === this.NodeFlag.DYNAMIC_NODE){
              const createDynamicChildNode = () =>{
                return new Promise(resolve =>{
                  let nodeCondition = '';
                  let openChildrenNodes:ITreeNode[]=[];
                  nodeType.arameters && nodeType.parameters.forEach(parameter => {
                    nodeCondition += parameter+"&";
                  });
                  nodeType.filters && nodeType.filters.forEach(filter => {
                    filter.propLinks && filter.propLinks.forEach(link => {
                      nodeTypesConfig.parentItemNode &&
                      (nodeCondition += link.slaveProp+"="+nodeTypesConfig.parentItemNode[link.masterProp]+"&");
                    });
                  });

                  this.apiService.doList(nodeType.entityClass+"?"+nodeCondition)
                    .toPromise()
                    .then(response =>{
                      response.forEach(item =>{
                        let newDynamicNode:ITreeNode = {
                          id : 'nodeId_' + CommonUtility.uuID(5),
                          parent : openNode.node.id,
                          text : item[nodeType.textKey]
                        };
                        newDynamicNode.data = {
                          'entityClass':nodeType.entityClass,
                          'item':item
                        };
                        openChildrenNodes.push(newDynamicNode);
                        this._childrenConfigs && this._childrenConfigs.forEach(childConfig =>{
                          if(childConfig.classType === this.NodeFlag.CHILDREN_NODE){
                            if(childConfig.entityClass === nodeType.entityClass){
                              if(childConfig.nodeTypes){
                                let newChildDynamicNode:ITreeNode = {
                                  id: 'nodeId_' + CommonUtility.uuID(5),
                                  parent: item[nodeType.idKey],
                                  text: ''
                                };
                                newChildDynamicNode.data = {
                                  data: childConfig.NodeTypes,
                                  isRoot:false,
                                  parentNodeItem:item,
                                  idKey:nodeType.idKey
                                };
                                openChildrenNodes.push(newChildDynamicNode);
                              }
                            }
                          }
                        });
                      });
                      resolve(openChildrenNodes);
                    })
                });
              };
              funcList.push(createDynamicChildNode);
            }
          });
        }
        Promise.all((()=>{
          let list:any[] = [];
          funcList.forEach(item =>{
            list.push(item());
          });
          return list;
        })()).then(result => {
          setTimeout(()=>{
            result.forEach(s =>{
              s.forEach(item =>{
                this._jsTree.create_node(item.parent,item,'last',()=>{},true);
              });
            });
          },100);

        });

      });
      $('#cnTree').on('after_close.jstree',(event,openNode) =>{
        const $nodes = this._jsTree.get_json(openNode.node.id).children;
        this._jsTree.delete_node($nodes);
        this._jsTree.create_node(openNode.node.id,'','last',()=>{},true);
      })
    });
  }
  createRootStaticNode(root,local){
    return new Promise(resolve =>{
      let rootStaticNode:ITreeNode = {
        id :       'nodeId_' + CommonUtility.uuID(5),
        parent : root.parent     ? root.parent   : "#",
        text :     root.nodeText ? root.nodeText : '未命名节点',
        icon :     root.icon     ? root.icon     : '',
        li_attr :  root.attr     ? root.attr     : '',
        a_attr :   root.href     ? root.href     : '',
        //children: [],
        state :    root.state    ? root.state    : {
          opened: false,
          disabled: false,
          selected: false
        }
      };
      if(root.nodeTypes && root.nodeTypes.length>0){
        rootStaticNode.data = {
          value:root.nodeTypes,
          isRoot:true
        };
        local._rootNodes.push({id:CommonUtility.uuID(5),parent:rootStaticNode.id,text:''});
      }
      local._rootNodes.push(rootStaticNode);
      resolve(local._rootNodes);
    });

  }
  createRootDynamicNode(root,local){
    return new Promise(resolve =>{
      local.apiService.doList(root.entityClass,root.parameters)
        .toPromise().then(
          response => {
            response.forEach(item =>{
              let dyncRootNode:ITreeNode = {
                id :       'nodeId_' + CommonUtility.uuID(5),
                parent :   item.parent     ? item.parent   : "#",
                text :     item[root.textKey] ? item[root.textKey] : '未命名节点',
                // icon :     item.img     ? item.img     : '',
                // li_attr :  item.attr     ? item.attr     : '',
                // a_attr :   item.href     ? item.href     : '',
                // readonly : item.readonly ? item.readonly : true,
                data:[],
                state :    item.state    ? item.state    : {
                  opened: false,
                  disabled: false,
                  selected: false,
                }
              };

              local._childrenConfigs && local._childrenConfigs.forEach(child => {
                if(child.classType === local.NodeFlag.CHILDREN_NODE){
                  if(child.entityClass === root.entityClass){
                    if(child.nodeTypes){
                      dyncRootNode.data.push({
                        value:child.nodeTypes,
                        isRootNode:true,
                        parentNodeItem:item,
                        idKey:root.idKey?root.idKey:''
                      });
                      local._rootNodes.push({id:CommonUtility.uuID(5),parent:dyncRootNode.id,text:''});
                    }
                  }
                }
              });
              local._rootNodes.push(dyncRootNode);
            });
            resolve(local._rootNodes);
          }
        );
    });
  }
}

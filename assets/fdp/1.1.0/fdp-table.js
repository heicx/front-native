define("fdp/1.1.0/fdp-table",["./fdp-namespace","cellula/0.4.2/cellula","cellula/0.4.2/cellula-namespace","cellula/0.4.2/cellula-class","cellula/0.4.2/cellula-util","cellula/0.4.2/cellula-events","cellula/0.4.2/cellula-cell","cellula/0.4.2/cellula-element","cellula/0.4.2/cellula-collection","$"],function(a,b,c){var d=a("./fdp-namespace"),e=a("cellula/0.4.2/cellula"),f=a("$"),g=e._util,h=e.Class,i=(e.Element,e.Cell),j=(e.Collection,d.DataTable=new h("DataTable",{hideClass:"fn-hide",tableTpl:{head:null,body:null},tips:{noResult:null,error:null},tipNodes:{},initTip:function(){for(var a in this.tips)this.tipNodes[a]=this.getNode(this.tips[a])},init:function(a){this._super(a),this.initTip()},registerEvents:function(){},prepareTplConfig:function(){},show:function(a){var b=a?g.removeClass:g.addClass;b(this.rootNode,this.hideClass)},error:function(){this.show(!1),g.removeClass(this.tipNodes.error,this.hideClass)},showNoResult:function(){this.show(!1),g.removeClass(this.tipNodes.noResult,this.hideClass)},receiver:function(a){if(a){var b=(a.target,a.name.split(":")[1]);switch(b){case"TABLERENDER":this.render(arguments[1]);break;case"SYSTEMERROR":this.error(!1)}}},render:function(a){var b=this.rootNode;if(g.addClass(this.tipNodes.error,this.hideClass),g.addClass(this.tipNodes.noResult,this.hideClass),0===a.length)return this.showNoResult(),this.emit("TABLEVIEW:NORESULT"),!1;var c=b.getElementsByTagName("table")[0],d=b.getElementsByTagName("colgroup")[0],e=c.getElementsByTagName("thead")[0],f=c.getElementsByTagName("tbody")[0];d&&c.removeChild(d),e&&c.removeChild(e),f&&c.removeChild(f),a=this.prepareTplConfig(a);var h=document.createElement("div");h.innerHTML="<table><colgroup>"+g.parseTpl(this.tableTpl.colgroup,a)+"</colgroup></table>",d=h.getElementsByTagName("colgroup")[0],c.appendChild(d),h.innerHTML="<table><thead>"+g.parseTpl(this.tableTpl.head,a)+"</thead></table>",e=h.getElementsByTagName("thead")[0],c.appendChild(e),h.innerHTML="<table><tbody>"+g.parseTpl(this.tableTpl.body,a)+"</tbody></table>",f=h.getElementsByTagName("tbody")[0],c.appendChild(f),this.show(!0),this.registerEvents()}}).inherits(i));j.build=function(a,b){if("string"!=typeof a)throw new Error("`name` is expect a String type parameters.");return f.isPlainObject(b)?new h(a,b,"NEW").inherits(d.DataTable):null},c.exports=j});
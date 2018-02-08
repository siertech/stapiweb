angular.module('adm').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('global/st-api/app-autocomplete/template-module/autoCompleteObject.html',
    "<button ng-click=\"openBusca()\" class=\"form-control {{extraClass}} text-left\" ng-class=\"{'text-muted':placeHolder}\">{{ngModel[label] || ngModel || placeHolder}}</button>"
  );


  $templateCache.put('global/st-api/app-autocomplete/template-module/buscaAutoCompleteObject.html',
    "<div class=\"busca-auto-complete\"><div class=\"modal-header\"><div class=\"col-lg-1 col-xs-1\" style=\"padding-left:3px;padding-right:3px;margin-top:5px\"><a class=\"ripple\" ng-click=\"fecharModal(this)\" style=\"color: #FBF7F7;font-size:20px;padding:9px\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a></div><div class=\"col-lg-11 col-xs-11\" style=\"padding-left:9px;padding-right:0px;width:89%\"><div class=\"input-group\"><input id=\"{{idInput}}\" ng-change=\"buscarItem(labelValue)\" ng-model-options=\"{debounce: 500}\" ng-model=\"labelValue\" autocomplete=\"off\" placeholder=\"{{placeHolder}}\" class=\"form-control\" focus-me=\"true\"> <span ng-show=\"labelValue\" class=\"input-group-btn\"><button type=\"button\" ng-click=\"labelValue='';buscarItem('')\" class=\"btn btn-default btn-busca-map-limpa text-muted input-primary\" style=\"height:42px\"><i class=\"fa fa-trash-o\"></i></button></span></div></div></div><div class=\"modal-body\"><div class=\"row\"></div><!-- aba de resultados --><div ng-show=\"aba=='resultados' ||!aba\" class=\"col-lg-12 auto-complete-inline\"><div class=\"pull-left\" style=\"margin-left:5px;padding:5px 0px 5px 0px\"><a ng-show=\"labelValue.length>0 && salvandoItem!=true\" ng-click=\"cadItem(labelValue, auxItemFilial.allFilials, this)\" class=\"btn btn-secondary\"><i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i> cadastrar <strong>\"{{labelValue}}\"</strong></a><label ng-show=\"salvandoItem == true\">Cadastrando item <i class=\"fa fa-refresh faa-spin animated\" aria-hidden=\"true\"></i></label></div><!-- Resultados --><ul ng-show=\"obs.length>0 &&(!hideResults || hideResults==false)\" class=\"list-group\" style=\"padding:5px\"><div class=\"row\"></div><li ng-repeat=\"item in obs\" class=\"list-group-item generic-transition\" ng-click=\"selecionarItem(item)\" style=\"height:55px\"><strong>{{item[1]}}</strong><br><span ng-show=\"subLabel\" class=\"text-small text-muted\">{{subLabel.label}}: {{item[2]}}</span></li></ul></div></div></div>"
  );


  $templateCache.put('global/st-api/app-config/template-module/button-config.html',
    "<button ng-click=\"open()\" class=\"btn btn-default {{extraClass}}\">{{label}} <i class=\"fa fa-gear\" aria-hidden=\"true\"></i></button>"
  );


  $templateCache.put('global/st-api/app-config/template-module/config.html',
    "<meta charset=\"UTF-8\"><modal-content titulo=\"'configurações'\" modal-instance=\"this\" ok-action=\"salvar\"><vertical-space></vertical-space><st-nav active-tab=\"activeTab\" tabs=\"[{label:'NFe'},{label:'Operação'},{label:'Relatórios'},{label:'PDV'},{label:'Ent mercadoria'},{label:'Podutos/Serviços'},{label:'Dashboard'},{label:'Movimentações'}]\"></st-nav><vertical-space></vertical-space><!-- Sessão de informações básicas --><div ng-show=\"activeTab==0\"></div><!-- FIM Sessão de informações básicas --><!-- Sessão de Operação --><div ng-show=\"activeTab==1\"><div class=\"form-group col-lg-4\"><label class=\"text-muted\">Parametro personalizado</label><input class=\"form-control\" ng-model=\"key\" placeholder=\"Parametro\"> <input class=\"form-control\" ng-model=\"config.confs[key]\" placeholder=\"Valor\"></div><div class=\"form-group col-lg-4\"><label class=\"text-muted\"><input type=\"checkbox\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.defaultCadAutoCompleteAllFiliais\"> Salvar cadastros para todas as filiais no auto-complete</label></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Modo</label><select ng-model=\"config.confs.modoOperacao\" class=\"form-control input-lg\" convert-to-number><option value=\"1\">Comanda Eletronica</option><option value=\"2\">PDV Ceasa</option><option value=\"3\">Simples ERP</option></select></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Tema do layout</label><select ng-model=\"config.confs.temaLayout\" class=\"form-control input-lg\"><option value=\"default\">Default</option><option value=\"light\">Light</option></select></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Itens máximo por página</label><select ng-model=\"config.confs.maxItensPage\" class=\"form-control input-lg\"><option value=\"5\">5</option><option value=\"7\">7</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"20\">20</option><option value=\"30\">30</option><option value=\"40\">40</option><option value=\"50\">50</option><option value=\"100\">100</option><option value=\"150\">150</option><option value=\"200\">200</option></select></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Início da semana</label><select ng-model=\"config.confs.inicio_semana\" class=\"form-control input-lg\"><option value=\"1\">Segunda</option><option value=\"2\">Terça</option><option value=\"3\">Quarta</option><option value=\"4\">Quinta</option><option value=\"5\">Sexta</option><option value=\"6\">Sábado</option><option value=\"0\">Domingo</option></select></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Forma de Pagamento Padrão</label><auto-complete-object inline=\"true\" value-only=\"true\" extra-class=\"''\" label-cad=\"'Cadastrar nova forma de pagamento'\" place-holder=\"'Digite a forma de pagamento'\" object-op=\"'opcao'\" label=\"'valor'\" fix-properties=\"{descricao:'forma_pagamento'}\" ng-model=\"config.confs.formaPagamentoPadrao\"></auto-complete-object></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><ul class=\"group-list\">Módulos</ul><li class=\"group-list-item\" ng-repeat=\"m in modulos\"><input ng-click=\"salvar(config)\" type=\"checkbox\" ng-model=\"m.selecionado\"> {{m.nome}}</li></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Style impressão movimentações</label><input ng-model=\"config.confs.stylePrint\" class=\"form-control input-lg\"></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Label para filiais</label><input ng-model=\"config.confs.labelFilial\" class=\"form-control input-lg\"></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Url da Impressora de Cupom</label><input ng-model=\"config.confs.urlImpressoraCupom\" class=\"form-control input-lg\"></div></div></div><!-- Fim Sesão Operação --><!-- Sessão Relatório --><div ng-show=\"activeTab==2\"><div class=\"col-lg-6\"><div class=\"form-group\"><ul class=\"group-list\">Itens do Relatório</ul><li class=\"group-list-item\" ng-repeat=\"i in itensRelatorio\"><input ng-click=\"salvar(config)\" type=\"checkbox\" ng-model=\"i.selecionado\"> {{i.label}}</li></div></div></div><!-- Sessão PDV --><div ng-show=\"activeTab==3\"><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">PDV Padrão</label><select ng-model=\"config.confs.tipoPdv\" class=\"form-control input-lg\"><option value=\"pdvsimples\">PDV Simples</option><option value=\"pdvficha\">PDV Ficha</option></select></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label class=\"text-muted\">Sugestão de Produtos</label><select ng-model=\"config.confs.sugestaoProdutosPDV\" class=\"form-control input-lg\"><option value=\"allProdutos\">Todos os Produtos</option><option value=\"maisVendidos\">Produtos mais vendidos</option></select></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label>Quantidade máxima de produtos sugeridos no PDV</label><input ng-model=\"config.confs.maxSugestaoProdutosPDV\" class=\"form-control\"></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label class=\"text-muted\">Tornar obrigatório definição do valor unitário de um pedido</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.requireValorUnitarioPedidoPdv\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label class=\"text-muted\">Beep de Pdv</label><select ng-model=\"config.confs.beepPdv\" class=\"form-control input-lg\"><option value=\"nenhum\">Nenhum</option><option value=\"beep1.wav\">Beep 1</option></select></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label>Tornar obrigatório escolha do cliente</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.escolhaClientePdv\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label>Mostrar opção de \"Parcelamento\"</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showParcelementoInPdv\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label>Exibir campo forma de pagamento</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showFormaPagamentoPdv\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label>Exibir campo data de emissão</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showDataEmissaoPdv\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label>Mostrar campo 'Empréstimo de embalagens'</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showEmpEmbalagensPdv\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"col-lg-4\"><div class=\"form-group\"><label>Exibir campo data de vencimento</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showDataVencimentoPdv\" type=\"checkbox\" class=\"form-control\"></div></div></div><!-- Sessão entrada de mercadoria --><div ng-show=\"activeTab==4\"><ul class=\"group-list\">Campos a serem exibidos na entrada de mercadoria</ul><li class=\"group-list-item\"><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showEntMercadoriaFormaPagamento\" type=\"checkbox\"> Forma de pagamento <input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showEntMercadoriaDataVencimento\" type=\"checkbox\"> Data de vencimento</li></div><!-- Sessão Produtos/Serviços --><div ng-show=\"activeTab==5\"><div class=\"col-lg-4\"><div class=\"form-group\"><label>Mostrar quantidade total de unidades em estoque</label><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.showTotalQuantEstoque\" type=\"checkbox\" class=\"form-control\"></div></div><div class=\"form-group col-lg-4\"><label class=\"text-muted\">Atalho de Busca</label><select ng-model=\"config.confs.atalhoBuscaProduto\" class=\"form-control input-lg\"><option value=\"codigoBarras\">Por código de barras</option><option value=\"nome\">Por nome do produto</option></select></div><div class=\"form-group col-lg-4\"><label class=\"text-muted\"><input type=\"checkbox\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.defaultCadProdutoAllFiliais\"> Produtos cadastrados para todas as filiais como padrão</label></div><div class=\"form-group col-lg-4\"><label class=\"text-muted\"><input type=\"checkbox\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" ng-model=\"config.confs.alertaEstoqueMin\"> Alertar estoque baixo</label></div></div><!-- Sessão Dashboard --><div ng-show=\"activeTab==6\"><st-split-check ng-model=\"config.confs.itensDashboard\" pre-values=\"'Despesas em atraso,Recebimentos em atraso,Produtos com estoque baixo,Produtos mais vendidos'\"></st-split-check></div><!-- Sessão Movimentações--><div ng-show=\"activeTab==7\"><li class=\"group-list-item\"><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" type=\"checkbox\" ng-model=\"config.confs.movimentacoesShowModoRepeticao\"> Permitir movimentação recorrente</li><li class=\"group-list-item\"><input ng-true-value=\"'true'\" ng-false-value=\"'false'\" type=\"checkbox\" ng-model=\"config.confs.movimentacoesShowParcelamento\"> Permitir parcelamento</li><div class=\"col-lg-3\"><div class=\"form-group\"><label class=\"text-muted\">Atributo de agrupamento na listagem</label><select ng-model=\"config.confs.attrAgrupaMovList\" class=\"form-control input-lg\"><option value=\"\">Nenhum</option><option value=\"pessoa.id\">Pessoa</option></select></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label class=\"text-muted\">Data de referencia na listagem</label><select ng-model=\"config.confs.attrDataReferenciaMovList\" class=\"form-control input-lg\"><option value=\"dataCadastro\">Data de cadastro</option><option value=\"data\">Data de vencimento</option><option value=\"dataBaixa\">Data de baixa</option></select></div></div><div class=\"col-lg-3\"><div class=\"form-group\"><label class=\"text-muted\">Ordenação na listagem</label><select ng-model=\"config.confs.attrOrderByMovList\" class=\"form-control input-lg\"><option value=\"pessoa.nome\">Pessoa</option><option value=\"id\">Nº da movimentação</option><option value=\"data\">Data de vencimento</option><option value=\"dataCadastro\">Data de cadastro</option><option value=\"dataBaixa\">Data de baixa</option></select></div></div></div><div class=\"row\"></div><br><div class=\"pull-right\"><button ng-click=\"salvar(config)\" class=\"btn btn-primary\">Salvar</button></div></modal-content>"
  );


  $templateCache.put('global/st-api/app-filial/template/alertFilial.html',
    "<meta charset=\"UTF-8\"><p class=\"text-muted\" style=\"font-size:17px\"><i class=\"warning fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{label}} {{config.confs.labelFilial ||'origem'}} <strong>\"{{currentFilial.xNome|uppercase}}\"</strong></p>"
  );


  $templateCache.put('global/st-api/app-filial/template/buttonFilial.html',
    "<meta charset=\"UTF-8\"><button ng-click=\"openChangeFilial()\" class=\"btn btn-primary btn-escolher-filial\" style=\"background-color: #3276b1\"><label class=\"button-filial-label only-desktop\"><i class=\"fa fa-building-o\" style=\"font-size:10px\" aria-hidden=\"true\"></i> <strong>{{labelCurrentFilial || 'Todas' |uppercase}} /</strong></label><label class=\"button-filial-label only-desktop\"><i class=\"fa fa-user-o\" aria-hidden=\"true\" style=\"font-size:10px\"></i> <strong>{{currentOperador.nome || 'Todos' |uppercase}}</strong></label><div class=\"only-mobile\"><strong class=\"button-filial-label\">{{labelCurrentFilial || 'Todas' |uppercase}} / {{currentOperador.nome || 'Todos' |uppercase}}</strong></div></button>"
  );


  $templateCache.put('global/st-api/app-filial/template/buttonFilialListWithModal.html',
    "<button class=\"btn btn-default btn-block\" style=\"background-color: #3276b1\" ng-click=\"open();\"><label><i class=\"text-small\">{{config.confs.labelFilial ||'origem'}}: </i><strong>{{labelCurrentFilial|uppercase}}</strong></label></button>"
  );


  $templateCache.put('global/st-api/app-filial/template/filialListWithModal.html',
    "<meta charset=\"UTF-8\"><modal-content titulo=\"'Alteração de filial'\" modal-instance=\"this\"><filial-list in-modal=\"true\"></filial-list></modal-content>"
  );


  $templateCache.put('global/st-api/app-filial/template/modalDetalheFilial.html',
    "<meta charset=\"UTF-8\"><modal-content icone-titulo=\"'busines'\" modal-instance=\"this\" titulo=\"filial.xNome|uppercase\"><div class=\"detalhe-header\"><st-nav active-tab=\"tab\" tabs=\"[{label:'Informações',icon:'fa-edit'},{label:'Configurações para NFe'}]\"></st-nav><vertical-space></vertical-space><!-- Tabs --><!-- Tab Informações--><div class=\"text-muted\" ng-show=\"tab==0\"><div class=\"form-group col-lg-5\"><label>Nome fantasia</label><input class=\"form-control\" ng-model=\"filial.xFant\"></div><div class=\"form-group col-lg-4\"><label>Inscrição Estadual</label><input class=\"form-control\" ng-model=\"filial.ie\"></div><div class=\"form-group col-lg-3\"><label>IE do Substituto Tributário</label><input class=\"form-control\" ng-model=\"filial.iest\"></div><div class=\"form-group col-lg-6\"><label>Inscrição Municipal do Prestador de Serviço</label><input class=\"form-control\" ng-model=\"filial.im\"></div><div class=\"form-group col-lg-6\"><label>Código de Regime Tributário</label><select class=\"form-control\" ng-model=\"filial.crt\"><option value=\"1\">1 Simples Nacional</option><option value=\"2\">2 Simples Nacional, excesso sublimite de receita bruta</option><option value=\"3\">3 Regime Normal. (v2.0)</option></select></div><div class=\"col-lg-12\"><hr></div><detalhe-pessoa pessoa=\"filial\"></detalhe-pessoa><detalhe-pessoa-endereco endereco=\"filial.endereco\"></detalhe-pessoa-endereco><div class=\"col-lg-12\"><hr></div></div><!-- Tab Configurações de NFe--><div class=\"text-muted\" ng-show=\"tab==1\"><!-- Certificado digital --><div class=\"form-group col-lg-3\"><label>Certificado digital A1</label><form ng-show=\"!filial.nomeCertificado\" name=\"userForm\" ng-submit=\"enviarCertificado(arquivo,senha)\" novalidate><input type=\"password\" placeholder=\"Senha do certificado\" ng-model=\"senha\" class=\"form-control\"> <input type=\"file\" file-model=\"arquivo\"> <button type=\"btn btn-primary submit\" class=\"btn btn-primary\">Enviar</button></form><div ng-show=\"filial.nomeCertificado\"><strong>{{filial.nomeCertificado}} <a ng-click=\"filial.nomeCertificado=null;\"><i class=\"fa fa-edit\"></i> Alterar</a></strong></div></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Natureza da operação</label><input class=\"form-control\" ng-model=\"filial.natOp\"></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Modelo</label><input class=\"form-control\" ng-model=\"filial.nfeMod\"></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Série</label><input class=\"form-control\" ng-model=\"filial.serie\"></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Ultimo número utilizado</label><input class=\"form-control\" ng-model=\"filial.nnf\"></div><div class=\"col-lg-12\"><hr></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Tipo de documento</label><select class=\"form-control\" ng-model=\"filial.tpNF\"><option value=\"0\">0 - Entrada</option><option value=\"1\">1 - Saída</option></select></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Tipo de impressão</label><select class=\"form-control\" ng-model=\"filial.tpImp\"><option value=\"1\">1 - Retrato</option><option value=\"2\">2 - Paisagem</option></select></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Forma de pagamento</label><select class=\"form-control\" ng-model=\"filial.indPag\"><option value=\"0\">0 - A Vista</option><option value=\"1\">1 - A Prazo</option><option value=\"2\">2 - Outros</option></select></div><div class=\"form-group col-lg-8\"><label class=\"text-muted text-small\">Tipo de emissão</label><select class=\"form-control\" ng-model=\"filial.tpEmis\"><option value=\"1\">1 - Emissão normal (não em contingência)</option></select></div><div class=\"col-lg-12\"><hr></div><div class=\"form-group col-lg-8\"><label class=\"text-muted text-small\">Presença do comprador no estabelecimento</label><select class=\"form-control\" ng-model=\"filial.indPres\"><option value=\"0\">0 - Não se aplica (por exemplo, Nota fiscal complementar ou de ajuste)</option><option value=\"1\">1 - Operação presencial</option><option value=\"2\">2 - Operação não presencial, pela Internet</option><option value=\"3\">3 - Operação não presencial, Teleatendimento</option><option selected value=\"9\">9 - Operação não presencial</option></select></div><div class=\"form-group col-lg-4\"><label class=\"text-muted text-small\">Consumidor final</label><select class=\"form-control\" ng-model=\"filial.indFinal\"><option value=\"0\">Não</option><option value=\"1\">Sim</option></select></div></div><!-- FIM tab configurações de NFe --><div class=\"pull-right\"><button ng-click=\"fechar(this)\" class=\"btn btn-default\"><i class=\"fa fa-undo\"></i> Fechar</button><button ng-click=\"salvar(filial)\" class=\"btn btn-primary\"><i class=\"fa fa-floppy-o\"></i> Salvar</button></div><div class=\"row\"></div></div></modal-content>"
  );


  $templateCache.put('global/st-api/app-filial/template/openChangeFilial.html',
    "<meta charset=\"UTF-8\"><modal-content icone-titulo=\"'line-chart'\" titulo=\"'Filial/Operador'\" modal-instance=\"this\"><div class=\"form-group col-lg-6 col-xs-6\"><label><i class=\"fa fa-home\"></i> Filial</label><select ng-model=\"filialEsc\" class=\"form-control\" ng-options=\"f as  f.xNome  for f in filiais track by f.id\"></select></div><div class=\"form-group col-lg-6 col-xs-6\"><label><i class=\"fa fa-user-o\"></i> Operador (Apenas filtros de listagem)</label><select ng-model=\"operadorEsc\" class=\"form-control\" ng-options=\"o as  o.nome for o in operadores track by o.id\"></select></div><vertical-space></vertical-space><div class=\"col-lg-6 pull-right\"><button ng-click=\"fecharModal()\" class=\"btn btn-default\"><i class=\"fa fa-undo\"></i> Cancelar</button> <button ng-click=\"alterarFilialAndOperador(filialEsc, operadorEsc)\" class=\"btn btn-primary\"><i class=\"fa fa-check\"></i> Aplicar</button></div></modal-content>"
  );


  $templateCache.put('global/st-api/app-filial/template/setAllFilials.html',
    "<meta charset=\"UTF-8\"><label ng-show=\"filiais.length>1 && !objeto.id\" class=\"text-muted text-small\"><input ng-model=\"objeto.allFilials\" type=\"checkbox\"> Cadastrar para todas as filiais</label>"
  );


  $templateCache.put('global/st-api/app-login/template-module/modalDateErro.html',
    "<meta charset=\"UTF-8\" />\n" +
    "<modal-content icone-titulo=\"'calendar'\" nfoModal.okActionIcon\"   titulo=\"'Data incorreta'\" modal-instance=\"this\">\n" +
    "\n" +
    "<div class=\"panel\">\n" +
    "   <div class=\"panel-body\">\n" +
    "      <h2 class=\"text-center text-muted\"><i class=\"fa fa-clock-o fa-2x\" aria-hidden=\"true\"></i></h2>\n" +
    "      <h4 class=\"text-center text-muted\"> A data do seu dispositivo está errada, ajuste a data  e reinicie seu navegador para continuar.</h4>	\n" +
    "   </div>\n" +
    "</div>\n" +
    "</modal-content>\n" +
    "	\n" +
    "	\n" +
    "	\n" +
    "		\n"
  );


  $templateCache.put('global/st-api/app-login/template-module/modalLembrarSenha.html',
    "<meta charset=\"UTF-8\"><modal-content loading-ok-action=\"vm.carregando\" icone-titulo=\"''\" modal-instance=\"this\" ok-action=\"vm.confirmar\" titulo=\"'Lembrar senha'\"><div class=\"generic-transition\" ng-show=\"vm.step==1\"><div class=\"form-group col-lg-4\"><label class=\"text-small\">Número de telefone (Login)</label><input ng-model=\"vm.numero\" class=\"form-control\"></div><div class=\"col-lg-12 pull-right\"><button ng-click=\"vm.lembrarSenha(vm.numero)\" class=\"btn btn-primary\"><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i> Enviar minha senha por SMS</button></div></div><div class=\"generic-transition\" ng-show=\"vm.step==2\"><p class=\"text-muted\">Em breve você receberá um sms com sua senha</p><div class=\"col-lg-12 pull-right\"><button ng-click=\"vm.fechar()\" class=\"btn btn-default\"><i class=\"fa fa-times\"></i> fechar</button></div></div></modal-content>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/LR/1.html',
    "<!-- Protótipo para novo módulo de logística reversa --><meta charset=\"UTF-8\"><div class=\"col-lg-12\" ng-controller=\"listaLRController as vm\"><div id=\"modulo\"></div><div class=\"form-group col-lg-4 col-xs-12\" id=\"buscaPessoa\"><auto-complete-object place-holder=\"'Digite o nome do cliente para buscar'\" auto-focus=\"true\" use-cache=\"true\" extra-class=\"'input-lg'\" ng-change=\"vm.getLrs(vm.clienteBusca.nome)\" inline=\"true\" tipo=\"'select'\" label-cad=\"'Cadastrar novo Cliente'\" place-holder=\"'Digite o nome do Cliente'\" object-op=\"'cliente'\" querys=\"\" label=\"'nome'\" ng-model=\"vm.clienteBusca\"></div><div class=\"col-lg-2\" ng-show=\"vm.clienteBusca\"><a ng-click=\"vm.getLrs();vm.clienteBusca=null\">Limpar buscar <i class=\"fa fa-trash\"></i></a></div><div class=\"col-lg-4\" id=\"onlyDevedores\"><st-checkbox label=\"'Exibir somente devedores'\" ng-model=\"vm.onlyDevedores\"></st-checkbox></div><!-- Botão flutuante --><ul mfb-menu position=\"br\" effect=\"zoomin\" ng-click=\"vm.openDetalhe()\" active-icon=\"fa fa-plus\" resting-icon=\"fa fa-plus\" toggling-method=\"click\" id=\"btnAdd\"><div id=\"btn-add\" style=\"margin-left:-90px\"></div></ul><vertical-space></vertical-space><div class=\"col-lg-12\"><p ng-show=\"carregando==true\" class=\"text-muted text-small\">Carregando empréstimos <i class=\"fa fa-refresh faa-spin animated\" aria-hidden=\"true\"></i></p><p ng-show=\"nenhumEmprestimo==true || emprestimo.quantidadeReceber==0\" class=\"text-muted text-small\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> Nenhuma embalagem a receber para o cliente selecionado.</p></div><vertical-space></vertical-space><!-- Exemplo de empréstimo --><div id=\"exemploEmprestimo\"><emprestimo-embalagem-exemplo></emprestimo-embalagem-exemplo></div><div ng-repeat=\"ob in vm.objetos\"><emprestimo-embalagem only-devedores=\"vm.onlyDevedores\" pessoa=\"ob\"></emprestimo-embalagem></div><mobile-tabs tabs=\"[\r" +
    "\n" +
    "      \r" +
    "\n" +
    "      {label:'Empréstimos', icon:'search', id: 'tabEmprestimos'},\r" +
    "\n" +
    "      {label:'Relatórios', icon:'pie-chart', id: 'tabRelatorios'},\r" +
    "\n" +
    "       \r" +
    "\n" +
    "   ]\"></mobile-tabs></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/base.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><modal-content icone-titulo=\"'list'\" titulo=\"'Cadastro de produto'\"></modal-content>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/cardList/1.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><strong class=\"text-left\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Produto teste</strong><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"></div></div></div></div><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><strong class=\"text-left\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Venda teste</strong><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">Total: R$ 350,00</p><p class=\"text-muted\">Data: 25/05/2017</p></div><div class=\"pull-right\"><st-check label=\"'Pago'\" ng-model=\"pdv.movimentacao.baixada\"></st-check></div></div></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/cardList/2.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><div class=\"dropdown\"><button class=\"btn btn-block btn-default dropdown-toggle text-left\" type=\"button\" data-toggle=\"dropdown\">Produto teste <i class=\"caret\"></i></button><ul class=\"dropdown-menu pull-left\"><li class=\"list-group-item\" ng-click=\"goToPdv(ob)\"><i class=\"fa fa-edit\"></i> Editar</li><li class=\"list-group-item\" confirm=\"Tem certeza que deseja deletar esta venda?\" confirm-title=\"Deletar Venda\" ng-click=\"deletarVenda(ob)\"><i class=\"fa fa-trash\"></i> Deletar</li><li class=\"list-group-item\" button-info-ob objeto=\"{{ob}}\"><i class=\"fa fa-info-circle\"></i> Informações</li></ul></div><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"></div></div></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/cardList/3.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><strong class=\"text-left\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Produto teste</strong><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div></div><div class=\"panel-footer pivo-panel-footer\"><ul><li><a class=\"btn btn-default\"><i class=\"fa fa-edit\"></i></a></li><li></li><li><a class=\"btn btn-default\"><i class=\"fa fa-trash\"></i></a></li><li></li></ul></div></div></div><mobile-tabs tabs=\"[\r" +
    "\n" +
    "      \r" +
    "\n" +
    "      {label:'Listagem', icon:'search', id: 'tabEmprestimos'},\r" +
    "\n" +
    "      {label:'Relatórios', icon:'pie-chart', id: 'tabRelatorios'},\r" +
    "\n" +
    "       \r" +
    "\n" +
    "   ]\"></mobile-tabs>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/cardList/4.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><strong class=\"text-left\"><a><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a> Produto teste</strong><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div></div><div class=\"panel-footer pivo-panel-footer\"><ul><li><a class=\"btn btn-default\"><i class=\"warning fa fa-edit\" style=\"font-size:25px\"></i></a></li><li></li><li><a class=\"btn btn-default\"><i class=\"fa fa-trash\" style=\"font-size:25px\"></i></a></li><li></li><li><a class=\"btn btn-default\"><i class=\"fa fa-info-circle\" style=\"font-size:25px\"></i></a></li><li></li></ul></div></div></div><mobile-tabs tabs=\"[\r" +
    "\n" +
    "      \r" +
    "\n" +
    "      {label:'Listagem', icon:'search', id: 'tabEmprestimos'},\r" +
    "\n" +
    "      {label:'Relatórios', icon:'pie-chart', id: 'tabRelatorios'},\r" +
    "\n" +
    "       \r" +
    "\n" +
    "   ]\"></mobile-tabs>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/cardList/5.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><div class=\"text-left\"><div class=\"dropdown\"><a class=\"dropdown-toggle text-left\" data-toggle=\"dropdown\"><strong><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> PRODUTO TESTE</strong></a><ul class=\"dropdown-menu list-group pull-left\" style=\"padding:5px\"><li ng-click=\"cadastrarMov(1)\" class=\"list-group-item\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Editar</li><li ng-click=\"cadastrarMov(2)\" class=\"list-group-item\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Deletar</li><li ng-click=\"cadastrarMov(2)\" class=\"list-group-item\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Informações</li></ul></div></div><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div></div></div></div><div class=\"col-lg-3\"><div class=\"panel pivo-panel\"><div class=\"panel-heading\"><div class=\"text-left\"><div class=\"dropdown\"><a class=\"dropdown-toggle text-left\" data-toggle=\"dropdown\"><strong><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> PRODUTO TESTE</strong></a><ul class=\"dropdown-menu list-group pull-left\" style=\"padding:5px\"><li ng-click=\"cadastrarMov(1)\" class=\"list-group-item\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Editar</li><li ng-click=\"cadastrarMov(2)\" class=\"list-group-item\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Deletar</li><li ng-click=\"cadastrarMov(2)\" class=\"list-group-item\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Informações</li></ul></div></div><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div><div class=\"pull-right\"><p class=\"text-muted\">quantidade: 100</p><p class=\"text-muted\">preço: R$ 99,00</p></div></div></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/filterLead/1.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-4 form-group\"><label>Busca por ocorrencia de termo</label><div class=\"filter-map text-center\"><form><div class=\"input-group\" style=\"z-index:1\"><input id=\"busca\" st-input tipo=\"{{infoBusca.tipo}}\" class=\"form-control input-busca-map\" ng-model=\"infoBusca.value\" placeholder=\"informe um termo para buscar\"> <span id=\"span-limpa-busca\" ng-show=\"infoBusca.value\" class=\"input-group-btn\"><button id=\"btn-limpa-busca\" type=\"button\" ng-click=\"infoBusca.value='';buscar(infoBusca)\" class=\"btn btn-default btn-busca-map-limpa text-muted\">x</button></span> <span class=\"input-group-btn\"><button id=\"btn-change-filtros\" class=\"btn btn-block btn-default dropdown-toggle\" style=\"width:35px;height:42px\" type=\"button\" data-toggle=\"dropdown\"><span><i class=\"fa fa-bars info\" aria-hidden=\"true\"></i></span></button><ul class=\"dropdown-menu list-group pull-right\" style=\"padding:5px\"><li class=\"list-group-item\"><strong>{{info.placeholder}}</strong> <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\" style=\"color:var(--secondary-color)\"></i> Buscar pelo nome do Lead</li></ul></span></div></form></div></div><div class=\"col-lg-4 form-group\"><select class=\"form-control\" style=\"line-height: 15px!important;\r" +
    "\n" +
    "    height: 25px!important;\r" +
    "\n" +
    "    margin-bottom: 2px;\r" +
    "\n" +
    "    font-size: 11px\"><option>Data do ultimo login</option></select><st-period de=\"periodoDe\" ate=\"periodoAte\"></st-period></div><div class=\"col-lg-4 form-group\"><label>Ativação</label><br><select class=\"form-control\"><option>Ativo nos ultimos 10 dias</option></select></div><div class=\"col-lg-12 pull-right\"><button class=\"btn btn-xs btn btn-default\"><i class=\"fa fa-trash\"></i> limpar filtros</button> <button class=\"btn btn-xs btn-primary\">aplicar filtros <i class=\"fa fa-check\"></i></button></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/lavoura/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><form class=\"form-group col-lg-4\"><select class=\"form-control\"><option>Setor 1</option><option>Setor 2</option><option>Setor 3</option></select></form><div class=\"col-lg-3\"><p class=\"text-muted\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\" style=\"color:orange\"></i> equipamento offline</p></div><form class=\"form-group col-lg-4\"><button class=\"btn btn-default\"><i class=\"fa fa-plus\"></i> Cadastrar novo setor</button></form><vertical-space></vertical-space><div class=\"col-lg-12\"><div class=\"col-lg-5\" style=\"padding-left:0px\"><div class=\"panel panel-body\" style=\"height: 230px\"><h4 class=\"text-muted\"><i style=\"color: var(--secondary-color)\" class=\"fa fa-clock-o\"></i> Tempo Real</h4><div class=\"pull-left\"><h1 style=\"font-size:72px\" class=\"text-muted text-center\"><img src=\"tempo-nublado.png\"> 0 <span style=\"font-size:15px;vertical-align: text-top;margin-left:-15px\">ºC</span></h1></div><div class=\"pull-right\"><p class=\"text-muted\">Chuva: 0%</p><p class=\"text-muted\">Umidade: 0%</p><p class=\"text-muted\">Vento: 0 km/h</p><p class=\"text-muted\">Pressão: 0 Kgf/cm2</p></div><div class=\"col-lg-12\"><hr></div></div></div><div class=\"col-lg-7\"><div class=\"panel panel-body\"><h4 class=\"text-muted\"><i style=\"color: var(--secondary-color)\" class=\"fa fa-cog\"></i> Gerenciamento irrigação</h4><div class=\"col-lg-4\"><button confirm=\"Tem certeza de deseja iniciar a irrigação para o setor?\" class=\"btn btn-lg- btn-primary btn-block\"><h1><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></h1><p>Ligar</p><p style=\"font-size:9px;margin-top:-5px\">Iniciar irrigação para este setor</p></button></div><div class=\"col-lg-4\"><button ng-disabled=\"true\" confirm=\"Tem certeza de deseja iniciar a irrigação para o setor?\" class=\"btn btn-lg- btn-default btn-block\"><h1><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></h1><p>Automação</p><p style=\"font-size:9px;margin-top:-5px\">Acionamento automático das válvulas</p></button></div><div class=\"col-lg-4\"><button ng-disabled=\"true\" confirm=\"Tem certeza de deseja iniciar a irrigação para o setor?\" class=\"btn btn-lg- btn-secondary btn-block\"><h1><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></h1><p>Relatórios</p><p style=\"font-size:9px;margin-top:-5px\">Estatísticas do sistema</p></button></div><div class=\"col-lg-12\"><hr></div></div></div></div><vertical-space></vertical-space><div class=\"col-lg-12\"><div class=\"col-lg-3\" style=\"padding-left:0px\"><div class=\"panel panel-body\"><h4 class=\"text-muted\"><i style=\"color: var(--secondary-color)\" class=\"fa fa-list\"></i> Umidade do solo nível-1</h4><h1 style=\"font-size:72px\" class=\"text-muted text-center\"><img width=\"200\" src=\"umidade-nivel-1.png\"></h1><h1 style=\"font-size:72px\" class=\"text-muted text-center\">0%</h1></div></div><div class=\"col-lg-3\"><div class=\"panel panel-body\"><h4 class=\"text-muted\"><i style=\"color: var(--secondary-color)\" class=\"fa fa-list\"></i> Umidade do solo nível-2</h4><h1 style=\"font-size:72px\" class=\"text-muted text-center\"><img width=\"200\" src=\"umidade-nivel-2.png\"></h1><h1 style=\"font-size:72px\" class=\"text-muted text-center\">0%</h1></div></div><div class=\"col-lg-3\"><div class=\"panel panel-body\"><h4 class=\"text-muted\"><i style=\"color: var(--secondary-color)\" class=\"fa fa-list\"></i> Molhamento foliar</h4><h1 style=\"font-size:72px\" class=\"text-muted text-center\"><img width=\"225\" src=\"agua-folha.png\"></h1><h1 style=\"font-size:72px\" class=\"text-muted text-center\">0%</h1></div></div><div class=\"col-lg-3\"><div class=\"panel panel-body\"><h4 class=\"text-muted\"><i style=\"color: var(--secondary-color)\" class=\"fa fa-list\"></i> Solo</h4><p class=\"text-muted\">Temperatura: 0 <span>ºC</span></p><p class=\"text-muted\">Ph: <span>0</span></p><button class=\"btn btn-block btn-secondary\"><i class=\"fa fa-check\"></i> Regular</button></div></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/lead/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><div class=\"col-lg-6\"><st-filter-map filter-map-instace=\"filterMapInstance\" busca-especial=\"buscaEspecial\" filtros=\"[\r" +
    "\n" +
    " 	        \r" +
    "\n" +
    " 	        {attr:'nome',placeholder:'Buscar pelo nome do produto'},\r" +
    "\n" +
    "			\r" +
    "\n" +
    "			]\r" +
    "\n" +
    "			\"></st-filter-map></div><div class=\"col-lg-6 form-group\"><select class=\"form-control\"><option>Período de testes</option></select></div><vertical-space></vertical-space><vertical-space></vertical-space><table class=\"modern-table st-table table-bordered table-striped table-condensed cf col-lg-12\"><thead class=\"cf\"><tr><th></th><th></th><th>Nome</th><th>Etapa</th><th>Telefone</th><th>Email</th><th>Origem de aquisição</th></tr></thead><tbody><tr class=\"alert-info\"><td><checkbox class=\"btn-primary\" ng-model=\"vm.pdv.carregado\" ng-true-value=\"1\" ng-false-value=\"0\" name=\"custom-name\"></checkbox></td><td style=\"width:90px\"><a data-toggle=\"modal\" data-target=\"#detalhe\" class=\"btn btn-xs btn-default\">detalhes <i class=\"fa fa-external-link\"></i></a></td><td data-title=\"Data\" class=\"text-center\"><strong>Paulo</strong></td><td><span class=\"destaque-item\">Período de testes</span></td><td><strong>31992267947</strong></td><td><strong>thomaz-guitar@hotmail.com</strong></td><td><span class=\"destaque-item\">S1</span></td></tr></tbody></table><st-modal idmodal=\"detalhe\" size=\"lg\"><div class=\"panel\"><div class=\"panel-heading\"><div class=\"pull-left\"><strong style=\"font-size:12px\" uib-tooltip=\"{{vm.labelPivo}}\">PAULO ROBERTO <span class=\"destaque-item\">Período de testes</span></strong></div><div class=\"pull-right\"><a id=\"card_edit_{{vm.index}}\" ng-click=\"vm.editFunction(vm.ob)\" class=\"btn-option-card-list\"><i class=\"fa fa-edit\"></i></a> <a id=\"card_delete_{{vm.index}}\" confirm=\"Tem certeza que deseja deletar este item?\" ng-click=\"vm.deleteFunction(vm.ob)\" class=\"btn-option-card-list\"><i class=\"fa fa-trash\"></i></a> <a id=\"card_info_{{vm.index}}\" button-info-ob objeto=\"{{vm.ob}}\" ng-click=\"vm.openDetalhePedido(r)\" class=\"btn-option-card-list\"><i class=\"fa fa-info-circle\"></i></a></div><div class=\"row\"></div><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\"><div class=\"pull-left\"><span class=\"text-muted text-small\"><i style=\"color:var(--secondary-color)\" class=\"fa fa-phone-square\"></i> <strong>31992267947</strong></span></div><div class=\"pull-right\"><span class=\"text-muted text-small\"><i style=\"color:var(--secondary-color)\" class=\"fa fa-envelope\" aria-hidden=\"true\"></i> <strong>thomaz-guitar@hotmail.com</strong></span></div><vertical-space></vertical-space><div class=\"pull-left\"><button style=\"margin-top:9px\" class=\"btn btn-xs btn-default\"><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i> Comentários</button> <button style=\"margin-top:9px\" class=\"btn btn-xs btn-default\"><i class=\"fa fa-external-link\" aria-hidden=\"true\"></i> Acessar sistema</button></div><div class=\"pull-right\"><p style=\"margin-top:10px\" class=\"text-small text-muted\">origem da aquisição: <span class=\"destaque-item\">S1</span></p></div><div class=\"col-lg-12\"><hr></div><div class=\"form-group col-lg-6\" style=\"padding-left:0px\"><label>etapa do funil</label><select class=\"form-control\"><option>Período de testes</option></select></div><div class=\"form-group col-lg-6\"><label uib-tooltip=\"Ultimo login efetuado no sistema\">Data da ultima etapa</label><br><span class=\"text-muted text-small\"><strong>27/10/2017 (x-dias)</strong></span></div><div class=\"col-lg-12\"><hr></div><div class=\"form-group col-lg-3\"><label uib-tooltip=\"Ultimo login efetuado no sistema\">ultimo login</label><br><span class=\"text-muted text-small\"><strong>27/10/2017</strong></span></div><div class=\"form-group col-lg-3\"><label uib-tooltip=\"Ultimo login efetuado no sistema\">ultimo cadastro</label><br><span class=\"text-muted text-small\"><strong>27/10/2017</strong></span></div><div class=\"col-lg-3\"><button style=\"margin-top:9px\" class=\"btn btn-xs btn-secondary\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i> Questionário</button></div><div class=\"col-lg-3\"><button style=\"margin-top:9px\" class=\"btn btn-xs btn-default\"><i class=\"fa fa fa-exchange\" aria-hidden=\"true\"></i> Financeiro</button></div><vertical-space></vertical-space><vertical-space></vertical-space><div class=\"col-lg-3\" style=\"padding-left:0px\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-list\"></i> Produtos cadastrados</span><br><span class=\"text-center\"><strong>20</strong></span></button></div><div class=\"col-lg-3\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Vendas realizadas</span><br><span class=\"text-center\"><strong>10</strong></span></button></div><div class=\"col-lg-3\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Clientes</span><br><span class=\"text-center\"><strong>15</strong></span></button></div><div class=\"col-lg-3\" style=\"padding-right:0px\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Relatórios</span><br><span class=\"text-center\"><strong>15</strong></span></button></div><div class=\"col-lg-12\"><hr></div><div class=\"col-lg-4\" style=\"padding-left:0px\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i> Computador</span><br><span class=\"text-center\"><strong>10</strong></span></button></div><div class=\"col-lg-4\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-tablet\" aria-hidden=\"true\"></i> Tablet</span><br><span class=\"text-center\"><strong>15</strong></span></button></div><div class=\"col-lg-4\" style=\"padding-right:0px\"><button class=\"btn btn-block btn-default text-small\"><span class=\"text-center\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> Celular</span><br><span class=\"text-center\"><strong>15</strong></span></button></div></div></div></st-modal>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/modal/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><body ng-controller=\"newModalController\"><modal-content cancel-action=\"cancelAction\" ok-action=\"okAction\" icone-titulo=\"'list'\" titulo=\"'Cadastro de produto'\"></modal-content></body>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/onboardIntro/1.html',
    "<meta charset=\"UTF-8\"><h3 class=\"text-muted text-center\">Seja bem vindo ao Ceasa Plus <i class=\"fa fa-smile-o\"></i></h3><vertical-space></vertical-space><ul class=\"simple-step center-block\"><li><i class=\"fa fa-circle\"></i></li><li><i class=\"fa fa-circle-thin\"></i></li><li><i class=\"fa fa-circle-thin\"></i></li></ul><vertical-space></vertical-space><button class=\"center-block btn btn-secondary button-step\">Próximo <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/onboardIntro/2.html',
    "<meta charset=\"UTF-8\"><h3 class=\"text-muted text-center\">Você já faz parte dos melhores <i class=\"fa fa-smile-o\"></i></h3><vertical-space></vertical-space><div class=\"col-lg-6\"><div class=\"printHide\"><canvas class=\"chart chart-doughnut\" chart-colours=\"proj.colours\" chart-options=\"chartOptions\" chart-data=\"proj.data\" chart-legend=\"true\" chart-labels=\"proj.labels\"></canvas></div><p></p></div><div class=\"col-lg-6\"></div><vertical-space></vertical-space><button class=\"center-block btn btn-secondary button-step\">Próximo <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/pdv/1.html',
    "<!-- Protótipo para novo módulo de logística reversa --><meta charset=\"UTF-8\"><div class=\"panel\"><div class=\"panel-body\" style=\"padding-bottom:0px\"><div class=\"col-lg-5 col-xs-5\"><p class=\"text-muted text-small\" style=\"margin-left: 10px\">R$ <strong style=\"color:var(--secondary-color);font-size:19px\">{{vm.totalPdv||0|number:2}}</strong></p></div><div class=\"col-lg-3 col-xs-3\"><button-baixa-mov template-version=\"2\" label=\"Pago\" class=\"printHide\" mov=\"vm.pdv.movimentacao\"></button-baixa-mov><a ng-if=\"vm.pdv.movimentacao.valor>0 && config.confs.showParcelementoInPdv=='true'\" data-toggle=\"modal\" data-target=\"#modalParcelas\">parcelas</a></div><div class=\"col-lg-4 col-xs-4\"><checkbox class=\"btn-primary\" ng-model=\"vm.pdv.carregado\" ng-true-value=\"1\" ng-false-value=\"0\" name=\"custom-name\"></checkbox><label class=\"text-muted\"><strong>Entregue</strong></label></div></div></div><div class=\"panel-body\"><div class=\"generic-transition\"><div class=\"form-group\"><label class=\"text-muted\"><i class=\"fa fa-user\"></i> Cliente</label><auto-complete-object initial-busca=\"vm.defaultClienteLabel  || 'Outros'\" auto-show-busca=\"!vm.pdv.movimentacao.pessoa\" id-input=\"'cliente-venda'\" use-cache=\"true\" extra-class=\"'input-lg'\" inline=\"true\" tipo=\"'select'\" label-cad=\"'Cadastrar novo Cliente'\" place-holder=\"'Primeiro, digite o nome do cliente'\" object-op=\"'cliente'\" querys=\"\" label=\"'nome'\" ng-model=\"vm.pdv.movimentacao.pessoa\"></div><vertical-space></vertical-space></div><div class=\"generic-transition\"><app-simple-pedido pedidos=\"vm.pdv.movimentacao.pedidos\"></app-simple-pedido></div><div ng-if=\"vm.step==2\" class=\"generic-transition\"><vertical-space></vertical-space><div class=\"panel\" ng-if=\"config.confs.showEmpEmbalagensPdv=='true'\"><div class=\"panel-body\"><div class=\"form-group col-lg-12\"><label class=\"text-muted text-small\"><i class=\"fa fa-archive\" style=\"color:#5bc068; font-size:22px\"></i> Empréstimo de embalagens</label><input type=\"tel\" ng-model=\"vm.pdv.lr.quantidade\" class=\"form-control ng-enter\" placeholder=\"Quantidade de embalagens emprestadas nesta venda\"><label class=\"text-muted text-small\" ng-if=\"vm.quantidadeEmbalagemReceber>0\">(<strong>{{vm.pdv.movimentacao.pessoa.nome|uppercase}}</strong> já está devendo <strong class=\"danger\">{{vm.quantidadeEmbalagemReceber}}</strong> embalagens de empréstimos anteriores)</label></div></div></div></div><div class=\"row\"></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/pdv/2.html',
    "<!-- Protótipo para novo módulo de logística reversa --><meta charset=\"UTF-8\"><div class=\"panel\"><div class=\"panel-body\"><div class=\"pull-left\"><label class=\"text-muted text-small\">Pago (<a id=\"btn-change-parcelas\" data-toggle=\"modal\" data-target=\"#modalParcelas\">Parcelas</a>)</label><br><button-baixa-mov class=\"printHide\" mov=\"pdv.movimentacao\"></button-baixa-mov></div><div class=\"pull-right\"><label class=\"text-muted text-small\" style=\"margin-bottom:12px\">Entregue</label><br><label class=\"toggle\"><input uib-tooltip=\"Carregou?\" ng-model=\"pdv.carregado\" ng-true-value=\"1\" ng-false-value=\"0\" type=\"checkbox\"> <span class=\"handle\" style=\"top:-65%\"></span></label></div></div></div><div class=\"panel\"><div class=\"panel panel-body\"><div class=\"col-lg-6\"><label class=\"text-muted text-small\"><i class=\"fa fa-archive\"></i> Empréstimo de embalagens (Embalagens a receber <strong class=\"danger\">{{quantidadeEmbalagemReceber}}</strong>)</label><input type=\"number\" ng-model=\"pdv.lr.quantidade\" class=\"form-control ng-enter\" placeholder=\"Quantidade de embalagens emprestadas\"></div><div ng-show=\"config.confs.showFormaPagamentoPdv=='true'\" class=\"form-group col-lg-6\"><label class=\"text-muted\"><i class=\"fa fa-bars\"></i> Forma de pagamento</label><auto-complete-object inline=\"true\" value-only=\"true\" extra-class=\"''\" label-cad=\"'Cadastrar nova forma de pagamento'\" place-holder=\"'Digite a forma de pagamento'\" object-op=\"'opcao'\" label=\"'valor'\" fix-properties=\"{descricao:'forma_pagamento'}\" ng-model=\"pdv.movimentacao.formaPagamento\"></auto-complete-object></div><div ng-show=\"config.confs.showDataEmissaoPdv=='true'\" class=\"form-group col-lg-6\"><label class=\"text-muted\"><i class=\"fa fa-calendar\"></i> Data Emissão</label><input st-input tipo=\"data\" placeholder=\"Data da venda\" ng-model=\"pdv.data\" class=\"form-control\"></div><div class=\"col-lg-6\"><div class=\"form-group\"><label><i class=\"fa fa-list\"></i> Produtos</label><itens-pedido pedidos=\"pdv.movimentacao.pedidos\"></itens-pedido><a ng-click=\"changeStep(1)\">alterar</a></div></div><div class=\"col-lg-6\"><label class=\"text-small text-muted\"><i class=\"fa fa-user\"></i> Cliente: <strong>{{pdv.movimentacao.pessoa.nome|uppercase}}</strong></label><a ng-click=\"changeStep(0)\">alterar</a></div><div class=\"col-lg-12\"><hr></div></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/questionario/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><h3 class=\"text-muted text-center\">Ajude-nos a melhorar ainda mais o <strong>CeasaPlus</strong>!</h3><h4 class=\"text-muted text-center\">Responda o questionário abaixo, é rapidinho <i class=\"fa fa-smile-o\"></i></h4><div class=\"col-lg-12\"><hr></div><div class=\"col-lg-6 form-group\"><label>O que motivou para comprar o sistema?</label><textarea class=\"form-control\"></textarea></div><div class=\"col-lg-6 form-group\"><label>Quais eram seus maiores problema antes de comprar o sistema?</label><textarea class=\"form-control\"></textarea></div><div class=\"col-lg-6 form-group\"><label>Como o sistema te ajuda atualmente?</label><textarea class=\"form-control\"></textarea></div><div class=\"col-lg-6 form-group\"><label>O que falta no sistema pra deixá-lo ainda melhor?</label><textarea class=\"form-control\"></textarea></div><vertical-space></vertical-space><div class=\"col-lg-12 pull-right\"><button class=\"btn btn-default\">Responder depois <i class=\"fa fa-clock-o\"></i></button> <button class=\"btn btn-secondary\">Pronto <i class=\"fa fa-check\"></i></button></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/questionarioPaginaCaptura/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><h3 class=\"text-muted text-center\">Quais são seus maiores problemas na Ceasa?</h3><vertical-space></vertical-space><div class=\"col-lg-12 lista-questoes\"><button class=\"btn btn-default text-center col-lg-4\"><i class=\"fa fa-list fa-2x\"></i><br>Controlar estoque</button> <button class=\"btn btn-secondary text-center col-lg-4\"><i class=\"fa fa-file-text-o fa-2x\" aria-hidden=\"true\"></i><br>Gerenciar vendas a prazo (Fiados)</button> <button class=\"btn btn-default text-center col-lg-4\"><i class=\"fa fa-pencil fa-2x\" aria-hidden=\"true\"></i><br>Passar vendas a limpo</button> <button class=\"btn btn-default text-center col-lg-4\"><i class=\"fa fa-calculator fa-2x\" aria-hidden=\"true\"></i><br>Contas manuais</button> <button class=\"btn btn-secondary text-center col-lg-4\"><i class=\"fa fa-archive fa-2x\" aria-hidden=\"true\"></i><br>Gerenciar empréstimos de caixas plásticas</button><vertical-space></vertical-space><div class=\"col-lg-12\"><button class=\"btn btn-block btn-default\">Próximo <i class=\"fa fa-arrow-right\"></i></button></div></div>"
  );


  $templateCache.put('global/st-api/app-prototype/prots/tour/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\">"
  );


  $templateCache.put('global/st-api/app-prototype/prots/vander/1.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><div class=\"form-group col-lg-4\"><label>Nome</label><input class=\"form-control\"></div><div class=\"form-group col-lg-4\"><label>CPF/CNPJ</label><input class=\"form-control\"></div><div class=\"form-group col-lg-4\"><label>Tipo de pessoa</label><select class=\"form-control\"><option>Física</option></select></div><div class=\"col-lg-12\"><hr></div><div class=\"form-group col-lg-2\"><label>Nacionalidade</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>País</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Natureza do doc</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Número do doc</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Orgão emissor</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Data de emissão</label><input class=\"form-control\"></div><div class=\"col-lg-12\"><hr></div><div class=\"form-group col-lg-3\"><label>Endereço</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Complemento</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Bairro</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Cidade</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Estado</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Cep</label><input class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Telefone</label><input class=\"form-control\"></div><div class=\"col-lg-12\"><hr></div><div class=\"col-lg-12 pull-right\"><button class=\"btn btn-default\"><i class=\"fa fa-undo\"></i> Cancelar</button> <button class=\"btn btn-secondary\"><i class=\"fa fa-check\"></i> Salvar</button></div><mobile-tabs active-tab=\"activeTab\" tabs=\"[{label:'Dados pessoais', icon:'user'}, {label:'Apólices',icon:'list'}]\"></mobile-tabs>"
  );


  $templateCache.put('global/st-api/app-prototype/template-route/prototype.html',
    "<!-- Defina aqui a descrição do protótipo --><meta charset=\"UTF-8\"><div ng-if=\"showTemplate==true\"><!--  \r" +
    "\n" +
    "<div class=\"form-group col-lg-3\" style=\"position:absolute; top:5px; left:35px;z-index:1040;\">\r" +
    "\n" +
    "   <label style=\"color:white!important\">Versão do protótipo</label>\r" +
    "\n" +
    "   <select ng-change=\"changeActiveVersion(activeVersion)\" ng-model=\"activeVersion\" ng-options=\"v as v.label for v in vs  | filter: {enable:true} track by v.id\"></select>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "--><vertical-space></vertical-space><ng-include src=\"activeVersion.template\"></ng-include></div>"
  );


  $templateCache.put('global/st-api/basic/detalhe.html',
    "<!-- \r" +
    "\n" +
    "---- Detalhamento do objeto ----\r" +
    "\n" +
    "Neste escopo o objeto é controlado aravés de vm.item\r" +
    "\n" +
    "\r" +
    "\n" +
    " --><meta charset=\"UTF-8\"><modal-content item=\"vm.item\" modal-instance=\"this\" loading-ok-action=\"vm.salvandoItem\" ok-action=\"vm.salvarItem\" delete-action=\"vm.deletarItem\" icone-titulo=\"'list'\" titulo=\"'  '\"></modal-content>"
  );


  $templateCache.put('global/st-api/basic/list.html',
    "<meta charset=\"UTF-8\"><vertical-space></vertical-space><div ng-controller=\"stControl\"><div class=\"col-lg-6\"><st-filter-map filter-map-instace=\"filterMapInstance\" busca-especial=\"buscaEspecial\" filtros=\"[\r" +
    "\n" +
    "	 	        \r" +
    "\n" +
    "	 	        {{attr:'atrr',placeholder:'Buscar pelo ...'},\r" +
    "\n" +
    "	 	        {attr:'attr',placeholder:'Buscar pela ...'}\r" +
    "\n" +
    "				\r" +
    "\n" +
    "				]\r" +
    "\n" +
    "				\"></st-filter-map></div><vertical-space class=\"only-desktop\"></vertical-space><vertical-space class=\"only-desktop\"></vertical-space><div class=\"col-lg-4 only-desktop\"><button ng-click=\"openItem()\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i> <strong>Cadastrar</strong></button></div><button-add ng-click=\"openItem()\"></button-add><vertical-space></vertical-space><vertical-space></vertical-space><div ng-repeat=\"ob in objetos\" class=\"col-lg-4 generic-transition\"><card-list index=\"{{$index}}\" ob=\"ob\" pivo=\"''\" edit-function=\"openItem\" delete-function=\"deletarItem\"></card-list></div><div ng-if=\"objetos.length==0\" class=\"col-lg-12\"><st-no-itens label=\"'Nenhum item econtrado.'\"></st-no-itens></div><vertical-space></vertical-space><st-pagination filter-map-instance=\"filterMapInstance\"></st-pagination></div>"
  );


  $templateCache.put('global/st-api/cadastros/template-module/detalheCadastro.html',
    "<meta charset=\"UTF-8\"><modal-content titulo=\"cadastro.label\" modal-instance=\"this\"><div class=\"form-group col-lg-12\"><label>Opção</label><input ng-model=\"cadastro.valor\" placeholder=\"Digite um valor para nova opção.\" class=\"form-control\"></div><div class=\"col-lg-6 col-md-6 col-xs-6\"><div class=\"form-group\"><button class=\"btn btn-default btn-block\" ng-click=\"fechar(this)\"><i class=\"fa fa-undo\"></i> Cancelar</button></div></div><div class=\"col-lg-6 col-md-6 col-xs-6\"><div class=\"form-group\"><button data-dismiss=\"modal\" class=\"btn btn-block btn-primary\" ng-click=\"salvar(cadastro,this)\"><i class=\"fa fa-floppy-o\"></i> Salvar</button></div></div><div class=\"row\"></div><br></modal-content>"
  );


  $templateCache.put('global/st-api/cadastros/template-route/cadastros.html',
    "<meta charset=\"UTF-8\"><vertical-space></vertical-space><div class=\"col-lg-3\"><div class=\"panel\" style=\"font-size:14px\"><div class=\"panel-body\"><h3 class=\"text-center\">Cadastros</h3></div><div class=\"panel-body\"><p class=\"text-center\"><strong>Estoque</strong></p><p><a ng-click=\"getOpcoes('categoria_produto','Categorias de Produtos')\">Categorias de Produtos</a></p><p><a ng-click=\"getOpcoes('marca_produto','Marcas')\">Marcas</a></p><p><a ng-click=\"getOpcoes('embalagem_produto','Embalagens')\">Embalagens</a></p><hr><p class=\"text-center\"><strong>Financeiro</strong></p><p><a ng-click=\"getOpcoes('forma_pagamento','Formas de Pagamento')\">Formas de Pagamento</a></p><p><a ng-click=\"getOpcoes('categoria_conta_pagar','Categorias - Conta Pagar')\">Categorias - Conta Pagar</a></p><p><a ng-click=\"getOpcoes('categoria_conta_receber','Categorias - Conta Receber')\">Categorias - Conta Receber</a></p></div></div></div><div class=\"col-lg-9\"><div class=\"panel\" style=\"font-size:14px\"><div class=\"panel-body\"><h3><strong>{{label}}</strong></h3><ul class=\"list-group\"><li class=\"list-group-item\" ng-if=\"opcoes\"><button ng-click=\"openCadastro({descricao:descricao,label:label})\" class=\"btn btn-xs\"><i class=\"fa fa-plus\"></i> Cadastrar</button></li><li ng-if=\"op!=null\" class=\"list-group-item\" ng-repeat=\"op in opcoes track by $index\">{{op.valor|uppercase}}<div class=\"pull-right\"><button class=\"btn btn-xs\" ng-click=\"apagar(op,$index)\"><i class=\"fa fa-trash-o\"></i> Apagar</button> <button class=\"btn btn-xs\" ng-click=\"openCadastro({id:op.id,descricao:op.descricao,label:label,valor:op.valor})\"><i class=\"fa fa-trash-o\"></i> Editar</button></div></li></ul></div></div></div>"
  );


  $templateCache.put('global/st-api/card-list/template-module/cardListDirective.html',
    "<meta charset=\"UTF-8\"><div class=\"panel pivo-panel\" ng-class=\"{'card-list-panel-par':vm.index%2!=0}\"><div class=\"panel-heading\"><div class=\"pull-left card-list-label-pivo\"><strong style=\"font-size:17px\" uib-tooltip=\"{{vm.labelPivo}}\"><i class=\"fa fa-{{vm.icon||'list'}}\"></i> {{vm.labelPivo|uppercase}}</strong></div><div ng-show=\"vm.hideButtons!=true\" class=\"pull-right\"><a id=\"card_edit_{{vm.index}}\" ng-click=\"vm.editFunction(vm.ob)\" class=\"btn-option-card-list\"><i class=\"fa fa-edit\"></i></a> <a id=\"card_delete_{{vm.index}}\" confirm=\"Tem certeza que deseja deletar este item?\" ng-click=\"vm.deleteFunction(vm.ob)\" class=\"btn-option-card-list\"><i class=\"fa fa-trash\"></i></a> <a id=\"card_info_{{vm.index}}\" button-info-ob objeto=\"{{vm.ob}}\" ng-click=\"vm.openDetalhePedido(r)\" class=\"btn-option-card-list\"><i class=\"fa fa-info-circle\"></i></a></div><div class=\"row\"></div><div class=\"pivo-panel-separator\"></div></div><div class=\"panel-body\" ng-transclude></div></div>"
  );


  $templateCache.put('global/st-api/st-checkbox/template-module/stCheckbox.html',
    "<div class=\"[ form-group ]\"><input type=\"checkbox\" style=\"display:none\" name=\"fancy-checkbox-primary\" ng-model=\"ngModel\" id=\"fancy-checkbox-primary\" autocomplete=\"off\"><div class=\"[ btn-group ]\"><label for=\"fancy-checkbox-primary\" class=\"[ btn btn-primary ]\" style=\"background-color: #357ebd!important\"><span class=\"[ glyphicon glyphicon-ok ]\" style=\"color:white;font-size:9px;width:10px;margin-left: -3px\"></span> <span></span></label><label for=\"fancy-checkbox-primary\" class=\"[ btn btn-default active ]\" style=\"font-size:12px!important;height:25px;padding:5px\">{{label}}</label></div></div>"
  );


  $templateCache.put('global/st-api/st-filter-map/template-module/stFilterMap.html',
    "<meta charset=\"UTF-8\"><!-- Campo de busca principal(Especial) --><div class=\"filter-map text-center\"><form ng-submit=\"buscarEspecial(buscaEspecial)\"><div class=\"input-group\" style=\"z-index:1\"><input id=\"busca\" st-input tipo=\"{{infoBusca.tipo}}\" class=\"form-control input-busca-map\" ng-model=\"infoBusca.value\" ng-model-options=\"{debounce: 500}\" ng-change=\"buscar(infoBusca)\" placeholder=\"{{infoBusca.placeholder}}\"> <span id=\"span-limpa-busca\" ng-show=\"infoBusca.value\" class=\"input-group-btn\"><button id=\"btn-limpa-busca\" type=\"button\" ng-click=\"infoBusca.value='';buscar(infoBusca)\" class=\"btn btn-default btn-busca-map-limpa text-muted\">x</button></span> <span class=\"input-group-btn\"><button id=\"btn-change-filtros\" class=\"btn btn-block btn-default dropdown-toggle\" style=\"width:35px;height:42px\" type=\"button\" data-toggle=\"dropdown\"><span><i class=\"fa fa-bars info\" aria-hidden=\"true\"></i></span></button><ul class=\"dropdown-menu list-group pull-right\" style=\"padding:5px\"><li ng-repeat=\"info in filtros\" class=\"list-group-item\" ng-click=\"changeInfoBusca(info)\"><strong>{{info.placeholder}}</strong> <i ng-show=\"infoBusca.attr==info.attr\" class=\"fa fa-check-circle-o\" aria-hidden=\"true\" style=\"color:var(--secondary-color)\"></i></li></ul></span></div></form></div>"
  );


  $templateCache.put('global/st-api/st-menu/template-module/stMenu.html',
    "<meta charset=\"UTF-8\"><div><nav id=\"nav_principal\" ng-cloak ng-show=\"showMenu\" class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0; background-color: #EDEDED\"><div id=\"nav-header\" class=\"navbar-header\" style=\"padding-top: 0px; min-width: 200px\"><button ng-click=\"changeCollapse()\" type=\"button\" id=\"button-menu-mobile\" class=\"navbar-toggle btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" style=\"margin: 0px!important; font-size: 25px\"><i class=\"fa fa-bars fa-1.5x\" style=\"color:white\"></i> Menu</button><!-- Menu mobile --><div id=\"menu\" class=\"dropdown-menu menu-mobile pull-right\"><!-- \r" +
    "\n" +
    "				          <div class=\"pull-left\" style=\"margin:9px;\">\r" +
    "\n" +
    "				              <span class=\"text-muted\">\r" +
    "\n" +
    "				                     <strong><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> {{appVersion}}</strong>\r" +
    "\n" +
    "				              </span>\r" +
    "\n" +
    "				          </div>\r" +
    "\n" +
    "				          \r" +
    "\n" +
    "				           --><div class=\"pull-right\" style=\"margin:9px\"><i class=\"fa fa-times text-muted\" style=\"font-size:32px\"></i></div><!-- Necessário para funcionar (Não remover) --><div class=\"col-xs-4\" style=\"padding-bottom:1px\"><a style=\"width:100%\" ng-click=\"clickItemMenu(item.path)\" nav-click><i class=\"fa fa-{{item.icon}} fa-2x info\" aria-hidden=\"true\"></i><br>{{item.label}}</a></div><div class=\"col-xs-4\" style=\"padding-bottom:1px\"><a style=\"width:100%\" ng-click=\"clickItemMenu(item.path)\" nav-click><i class=\"fa fa-{{item.icon}} fa-2x info\" aria-hidden=\"true\"></i><br>{{item.label}}</a></div><!-- // Necessário para funcionar (Não remover) --><vertical-space></vertical-space><div class=\"col-xs-12\"><hr></div><div class=\"col-xs-4\" ng-repeat=\"item in itens\" style=\"padding-bottom:19px\"><a class=\"btn btn-mobile-menu ripple\" style=\"width:100%\" ng-click=\"clickItemMenu(item.path)\" nav-click><i class=\"fa fa-{{item.icon}} fa-2x info\" aria-hidden=\"true\"></i><br><strong>{{item.label}}</strong></a></div><vertical-space></vertical-space><div class=\"col-xs-12\"><hr></div><!-- \r" +
    "\n" +
    "						 <div class=\"col-xs-4\" >\r" +
    "\n" +
    "			                 <a button-tutorial   class=\"btn btn-mobile-menu drift-open-chat\" style=\"width:100%;\" nav-click>\r" +
    "\n" +
    "			                 <i class=\"fa fa-film fa-2x info\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "									<br>Vídeos</a>\r" +
    "\n" +
    "						 </div>\r" +
    "\n" +
    "						  --><div class=\"col-xs-4\"><a class=\"btn btn-mobile-menu\" style=\"width:100%\" ng-click=\"logOut()\" nav-click><i class=\"fa fa-sign-out fa-2x info\" aria-hidden=\"true\"></i><br><strong>Sair do sistema</strong></a></div></div><!-- \r" +
    "\n" +
    "                <a class=\"navbar-brand\" href=\"#/inicio\"><img width=\"89\" src=\"logo-albar.png\"/></a>\r" +
    "\n" +
    "                 --><div class=\"only-mobile\"><a ng-if=\"atualPage!='Inicio'\" class=\"navbar-brand\" ng-click=\"goToPageAnt(pageAnt)\" style=\"color: #FBF7F7\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> <a ng-if=\"atualPage!='Inicio'\" class=\"navbar-brand label-atual-page-mobile\" style=\"color: #FBF7F7\"><span ng-show=\"!loadingSpinner || loadingSpinner==false\" style=\"margin-left:-15px;font-size:0.9em\">{{atualPage}}</span> <i ng-show=\"loadingSpinner==true\" class=\"fa fa-spinner faa-spin animated\" aria-hidden=\"true\"></i><network-button-status></network-button-status></a></div></div><!-- Menu Direito Topop --><div class=\"only-desktop\"><div class=\"breadcumb item-menu-top\"><div class=\"dropdown\"><button ng-disabled=\"routeHistory.length<1 || !routeHistory\" class=\"btn btn-primary dropdown-toggle btn-escolher-filial\" style=\"background-color: #3276b1\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i> <i class=\"text-small\">você está em: </i><strong>{{atualPage||'Início' |uppercase}}</strong> <i ng-show=\"loadingSpinner==true\" class=\"fa fa-spinner faa-spin animated\" aria-hidden=\"true\"></i> <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" ng-if=\"routeHistory.length>1\"><li class=\"list-group-item text-muted\" ng-if=\"r.label!=atualPage &&  r.path!='/login'\" ng-repeat=\"r in routeHistory | reverse\"><a style=\"background-color:transparent\" ng-click=\"clickItemMenu(r.path)\"><i class=\"fa fa-clock-o\"></i> {{r.label}}</a></li></ul></div></div><st-top-menu class=\"only-desktop\"></st-top-menu></div><!-- Menu desktop --></nav></div>"
  );


  $templateCache.put('global/st-api/st-modal/template-module/modalAlert.html',
    "<meta charset=\"UTF-8\"><modal-content modal-instance=\"this\" titulo=\"modal.titulo || 'OPS'\" modal-instance=\"this\" ok-action-label=\"'OK'\"></modal-content>"
  );


  $templateCache.put('global/st-api/st-modal/template-module/modalContent.html',
    "<div class=\"modal-header\"><ul class=\"list-button-action-modal\"><li ng-show=\"okAction\"><button ng-disabled=\"disableOkButton || loadingOkAction==true\" class=\"btn btn-action-modal ripple\" ng-click=\"okAction(this)\"><i id=\"btn-ok-action\" ng-show=\"loadingOkAction !=true\" class=\"fa {{okActionIcon || 'fa-check'}}\"></i> <i ng-show=\"loadingOkAction==true\" class=\"fa fa-refresh faa-spin animated ng-hide\"></i> <span>{{okActionLabel || 'SALVAR' |uppercase}}</span></button></li></ul><h4 class=\"modal-title\"><a class=\"ripple\" ng-click=\"cancelAction(modalInstance)\" style=\"color: #FBF7F7;font-size:18px;padding:9px\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> <strong>{{titulo}}</strong></h4></div><div class=\"modal-body\" ng-transclude></div><div class=\"row\"></div><div ng-show=\"deleteAction && item.id\" class=\"button-mobile ripple\" tooltip-enable=\"true\" tooltip=\"Deletar este item\" tooltip-placement=\"left\"><a confirm=\"Tem certeza que deseja deletar este item?\" ng-click=\"deleteAction()\" style=\"background-color:#e12a0a!important\"><i class=\"fa fa-trash\"></i></a></div>"
  );


  $templateCache.put('global/st-api/st-modal/template-module/stModal.html',
    "<div id=\"{{idmodal}}\" class=\"modal\" role=\"dialog\"><div class=\"modal-dialog modal-{{size}}\"><!-- Modal content--><div class=\"modal-content\"><div class=\"modal-header\"><button style=\"color:white\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\"><i class=\"fa fa-{{icon}}\"></i> {{titulo}}</h4></div><div class=\"modal-body\" ng-transclude></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button></div></div></div></div>"
  );


  $templateCache.put('global/st-api/st-nav/template-module/stNav.html',
    "<meta charset=\"UTF-8\"><ul class=\"nav nav-tabs\" role=\"tablist\"><li ng-repeat=\"tab in tabs\" role=\"presentation\" ng-class=\"{'active':activeTab==$index}\"><a ng-click=\"alterarTab($index)\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\"><i ng-if=\"activeTab==$index\" class=\"fa fa-check\"></i> {{tab.label}}</a></li></ul>"
  );


  $templateCache.put('global/st-api/st-sync/template-module/syncCachePost.html',
    "<meta charset=\"UTF-8\"><div uib-tooltip=\"sincronizando itens\" ng-show=\"vm.sizeCachePostInExcecution>0\" style=\"padding:15px 0px 0px 9px;float:left\"><span style=\"color:white\" class=\"text-small\"><i class=\"fa fa-arrow-up faa-float animated\" aria-hidden=\"true\"></i> <strong style=\"width:60px\">{{vm.indexCachePostInExcecution}}/{{vm.sizeCachePostInExcecution}}</strong></span></div>"
  );


  $templateCache.put('global/st-api/st-table/template-module/optionsTable.html',
    ""
  );


  $templateCache.put('global/st-api/st-table/template-module/stTable.html',
    "<meta charset=\"UTF-8\"><vertical-space></vertical-space><!-- Filtroe e paginação --><div class=\"col-lg-6\"><st-filter-map id=\"filtros-table\" busca-especial=\"buscaEspecial\" filtros=\"filtros\"></st-filter-map></div><vertical-space class=\"only-desktop\"></vertical-space><div class=\"col-lg-4 only-desktop\"><button style=\"margin-top:15px\" ng-click=\"cadItem()\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i> <strong>{{cadLabel}}</strong></button></div><vertical-space></vertical-space><button-add ng-click=\"cadItem()\"></button-add><vertical-space></vertical-space><div><div ng-repeat=\"ob in objetos\" class=\"col-lg-4\"><card-list icon=\"{{icon}}\" index=\"{{$index}}\" class=\"pessoa-item\" ob=\"ob\" pivo=\"'nome'\" edit-function=\"openDetalhe\" delete-function=\"deletarItem\"><div class=\"col-lg-12 col-xs-12\"><div class=\"pull-left\"><label ng-if=\"detalheLink==true\"><a class=\"open-detalhe\" style=\"color:var(--secondary-color)\" uib-tooltip=\"Visualizar movimentações (vendas, despesas, etc)\" ng-if=\"detalheLink==true\" ng-click=\"openDetalhe(ob,1)\" ng-disabled=\"ob.disable || l.disable\"><i class=\"fa fa-line-chart fa-2x\"></i></a></label></div><div class=\"pull-right\"><label class=\"text-muted\">cadastrado em: <strong><i class=\"fa fa-calendar\"></i> {{ob.dataCadastro|date:'dd/MM/yyyy'}}</strong></label></div></div></card-list></div></div><vertical-space></vertical-space><!-- Classe table-responsive --><st-pagination></st-pagination>"
  );


  $templateCache.put('global/st-api/st-tutorial/template-module/detalheTutorial.html',
    "<meta charset=\"UTF-8\"><modal-content icone-titulo=\"'question'\" titulo=\"vm.tutorial.titulo\" modal-instance=\"this\"><p class=\"text-small text-muted\">{{vm.tutorial.descricao}}</p><youtube-video player-width=\"'100%'\" video-url=\"vm.linkTutorial\" player-vars=\"vm.playerVars\" player=\"vm.player\"></youtube-video></modal-content>"
  );


  $templateCache.put('global/st-api/st-tutorial/template-module/tutorialList.html',
    "<meta charset=\"UTF-8\"><modal-content icone-titulo=\"'question'\" titulo=\"'Ajuda do sistema'\" modal-instance=\"this\"><li ng-repeat=\"item in vm.tutoriais\" class=\"list-group-item\" ng-click=\"vm.openTutorial(item)\" style=\"height:55px\"><strong>{{item.titulo||uppercase}}</strong><br><span n class=\"text-small text-muted\">{{item.descricao}}</span></li></modal-content>"
  );


  $templateCache.put('global/st-api/st-util/template-module/buttonAdd.html',
    "<meta charset=\"UTF-8\"><div id=\"button-add-produto\" class=\"button-mobile ripple\" tooltip-enable=\"true\" tooltip=\"Clique para cadastrar um novo item\" tooltip-placement=\"left\"><a><i class=\"fa fa-plus\"></i></a></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/buttonExpressCad.html',
    "<meta charset=\"UTF-8\"><button class=\"btn btn-default dropdown-toggle navbar-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-plus\" style=\"color:white\"></i></button><ul class=\"dropdown-menu list-group pull-right\" style=\"padding:5px\"><span class=\"text-muted\">Atalhos:</span><li class=\"list-group-item\"><a ng-click=\"cadDespesa()\"><i class=\"fa fa-plus\"></i> Nova despesa</a></li></ul>"
  );


  $templateCache.put('global/st-api/st-util/template-module/estadosCidades.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-4 form-group\"><label class=\"text-muted\">Estado <i ng-show=\"vm.loadingEstados==true\" class=\"fa fa-spinner faa-spin animated\" aria-hidden=\"true\"></i></label><select class=\"form-control\" ng-change=\"vm.changeEstado(vm.estado)\" ng-model=\"vm.estado\" ng-options=\"est as est.nome for est in vm.estados track by est.id\"></select></div><div class=\"col-lg-8 form-group\"><label class=\"text-muted\">Cidade <i ng-show=\"vm.loadingCidades==true\" class=\"fa fa-spinner faa-spin animated\" aria-hidden=\"true\"></i></label><select class=\"form-control\" ng-change=\"vm.changeCidade(vm.cidade)\" ng-model=\"vm.cidade\" ng-options=\"cidade as cidade.nome for cidade in vm.cidades track by cidade.id\"></select></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/info-ob/buttonInfoOb.html',
    "<meta charset=\"UTF-8\"><label><a class=\"{{classe||'default'}}\"><i class=\"fa {{icon||'fa-info'}}\"></i></a></label>"
  );


  $templateCache.put('global/st-api/st-util/template-module/info-ob/modalInfoOb.html',
    "<meta charset=\"UTF-8\"><modal-content icone-titulo=\"'info'\" titulo=\"'Informações'\" modal-instance=\"this\"><p class=\"text-muted\"><i class=\"fa fa-list\"></i> Histórico do item</p><p ng-repeat=\"h in historicos\" class=\"text-muted\"><i class=\"fa fa-info-circle\"></i> {{h}}</p></modal-content>"
  );


  $templateCache.put('global/st-api/st-util/template-module/inputEdit.html',
    "<meta charset=\"UTF-8\"><div ng-show=\"mostraValor==true\" class=\"form-group\"><i class=\"fa fa-{{icon}}\" aria-hidden=\"true\"></i> {{label}} <strong ng-if=\"type=='password'\">*********</strong> <strong ng-if=\"!type || type!='password'\">{{ngModel}}</strong> <button type=\"button\" ng-click=\"mostraValor=false\" class=\"btn btn-default btn-xs\">Alterar <i class=\"fa fa-edit\"></i></button></div><div ng-show=\"mostraValor==false\" class=\"form-group\"><label class=\"text-muted text-small\"><i class=\"fa fa-{{icon}}\" aria-hidden=\"true\"></i> {{label}}</label><input type=\"{{type||'text'}}\" ng-model=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"{{label}}\"></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/itemSelection.html',
    "<meta charset=\"UTF-8\"><div class=\"st-item-selection\"><p style=\"margin:0px\"><span class=\"text-small text-muted-2\"><a ng-click=\"setPagina(0)\" ng-disabled=\"pagina==0\" tooltip=\"Primeira Página\" class=\"btn btn-xs\"><i class=\"text-muted-2 fa fa-angle-double-left fa-2x\" aria-hidden=\"true\"></i></a></span> <span class=\"text-small text-muted-2\"><a ng-disabled=\"pagina==0\" ng-click=\"setPagina(pagina -1)\" tooltip=\"Anterior\" class=\"btn btn-xs\"><i class=\"text-muted-2 fa fa-angle-left fa-2x\" aria-hidden=\"true\"></i></a></span> <a ng-click=\"selecionarItem(item)\" class=\"btn btn-xs\" ng-class=\"{'btn-default':$index % 2==0,'btn-info':$index % 2!=0}\" ng-repeat=\"item in itens\" class=\"text-small\">{{item[label]}} <strong ng-if=\"extraLabel\">({{item[extraLabel]}})</strong> </a><span class=\"text-small text-muted-2\"><a ng-click=\"setPagina(pagina +1)\" tooltip=\"Próxima\" class=\"btn btn-xs\"><i class=\"text-muted-2 fa fa-angle-right fa-2x\" aria-hidden=\"true\"></i></a></span></p></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/mobileTabs.html',
    "<meta charset=\"UTF-8\"><div style=\"margin-bottom:90px;display:block\" class=\"printHide\"></div><div class=\"mobile-tabs\"><ul class=\"mobile-tabs-content\"><li id=\"{{tab.id}}\" ng-click=\"vm.alterarTab($index+1)\" class=\"mobile-tabs-item\" ng-repeat=\"tab in vm.tabs\" ng-class=\"{'active' : vm.activeTab==($index+1)}\"><label class=\"mobile-tabs-icon\"><i class=\"fa fa-{{tab.icon}} fa-1.5x\"></i></label><div class=\"row\"></div><label class=\"mobile-tabs-label\">{{tab.label}}</label></li></ul></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/modalAlertEstoque.html',
    "<meta charset=\"UTF-8\"><modal-content icone-titulo=\"'bell-o'\" titulo=\"'Alerta de estoque mínimo'\" modal-instance=\"this\"><ul class=\"list-group\" style=\"padding-left:0px\"><li ng-repeat=\"i in itens\" class=\"list-group-item\" ng-click=\"toProduct(i[0],this)\"><i class=\"info fa fa-exclamation-circle\" aria-hidden=\"true\"></i><strong> \"{{i[1]}} {{i[2]}} \"</strong> está com estoque baixo ( <strong>{{i[3]}}</strong> uni)</li></ul><h3 ng-if=\"itens.length==0\">Nenhum produto com estoque baixo.</h3></modal-content>"
  );


  $templateCache.put('global/st-api/st-util/template-module/networkButtonStatus.html',
    "<meta charset=\"UTF-8\"><button ng-show=\"online_status==false\" class=\"btn btn-xs btn-default\" style=\"color: #506479\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> trabalhando offiline!</button>"
  );


  $templateCache.put('global/st-api/st-util/template-module/st-collapse.html',
    "<meta charset=\"UTF-8\"><div class=\"col-lg-12\"><a ng-click=\"show=!show\">{{label}}</a></div><div ng-show=\"show\" ng-transclude></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/st-pagination.html',
    "<meta charset=\"UTF-8\"><footer ng-hide=\"$parent.objetos.length==0 && pagina==0\" class=\"st-pagination\"><div class=\"col-lg-3\"></div><!-- Paginação --><div class=\"col-lg-6 filter-map filter-map-pagination\"><p class=\"text-muted text-small text-center\">Exibindo <strong>{{$parent.objetos.length}}</strong> de <strong>{{$parent.countAll}}</strong></p><div class=\"st-pagination\"><div class=\"panel\" style=\"height:42px\"><div class=\"panel-body\" style=\"padding:0px\"><p style=\"margin:0px\"><span class=\"text-muted-2\"><a ng-click=\"setPagina(0)\" ng-disabled=\"pagina==0\" class=\"btn\"><i class=\"text-muted-2 fa fa-angle-double-left fa-2x\" aria-hidden=\"true\"></i></a></span> <span class=\"text-muted-2\"><a ng-disabled=\"pagina==0\" ng-click=\"setPagina(pagina -1)\" class=\"btn\"><i class=\"text-muted-2 fa fa-angle-left fa-2x\" aria-hidden=\"true\"></i></a></span> <strong><span class=\"text-muted-2\">Página {{pagina +1}}</span></strong> <span class=\"text-muted-2\"><a ng-disabled=\"! ( ($parent.objetos.length > 0 ) && ( ((pagina+1) * max) < $parent.countAll ))\" ng-click=\"setPagina(pagina +1)\" class=\"btn\"><i class=\"text-muted-2 fa fa-angle-right fa-2x\" aria-hidden=\"true\"></i></a></span> <span class=\"text-muted-2\"><a ng-click=\"setPagina(pagina)\" class=\"text-muted-2\"><i class=\"fa fa-refresh\"></i></a></span></p></div></div></div></div><div class=\"col-lg-3\"></div></footer>"
  );


  $templateCache.put('global/st-api/st-util/template-module/st-split-check.html',
    "<div class=\"form-group\"><li class=\"group-list-item\" ng-repeat=\"i in itens\"><input ng-click=\"changeCheck()\" type=\"checkbox\" ng-model=\"i.selecionado\"> {{i.label}}</li></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/st-step.html',
    "<meta charset=\"UTF-8\"><div class=\"only-desktop step-cad-top col-lg-12\"><div class=\"stepwizard text-center\"><div class=\"stepwizard-row setup-panel\"><div class=\"stepwizard-step\" ng-repeat=\"s in steps\"><a ng-click=\"changeStep($index)\" type=\"button\" ng-class=\"{'btn-primary':step==$index}\" class=\"btn btn-default btn-circle\">{{$index+1}}</a><p class=\"text-center text-muted\"><i>{{s.label}}</i></p></div></div></div></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stAlertButton.html',
    "<meta charset=\"UTF-8\"><div class=\"notification-icon\"><button ng-click=\"openAlerts(itens)\" class=\"btn\" style=\"background:transparent;padding:0px\"><span class=\"icon-alert fa fa-bell-o\"></span></button> <span ng-click=\"openAlerts(itens)\" ng-if=\"numAlerts>0\" class=\"number-alerts badge\">{{numAlerts}}</span></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stCheck.html',
    "<label class=\"{{labelClass}}\">{{label}}</label><br ng-if=\"label\"><label class=\"toggle printHide\"><input ng-checked=\"ngModel=='true' || ngModel==true || ngModel==1\" ng-model=\"ngModel\" ng-change=\"changeModel(model)\" ng-disabled=\"ngDisabled\" type=\"checkbox\"> <span class=\"handle\"></span></label>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stCollapsePanel.html',
    "<meta charset=\"UTF-8\"><!--panel--><div class=\"panel panel-default\"><div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\"#collapse{{$id}}\"><h3 class=\"panel-title text-muted\"><strong><i class=\"fa fa-{{icone}}\"></i> {{titulo}}</strong></h3></div><div id=\"collapse{{$id}}\" class=\"panel-body collapse\" ng-class=\"{'in':show==true}\" ng-transclude></div></div><!--/panel-->"
  );


  $templateCache.put('global/st-api/st-util/template-module/stPeriod.html',
    "<meta charset=\"UTF-8\"><div ng-show=\"singlePeriod!=true\" class=\"input-group\"><input ng-change=\"change()\" placeholder=\"Início\" st-input tipo=\"data\" class=\"form-control\" ng-model=\"de\" style=\"border-right:none\"> <span class=\"input-group-btn\"><button class=\"btn btn-default button-periodo-ate\" style=\"height:42px\">Até</button></span> <input ng-change=\"change()\" placeholder=\"Fim\" style=\"border-left:none\" st-input tipo=\"data\" class=\"form-control\" ng-model=\"ate\"> <span class=\"input-group-btn\"><button id=\"btn-open-change-period\" class=\"btn btn-block btn-default dropdown-toggle\" style=\"width:35px;height:42px\" type=\"button\" data-toggle=\"dropdown\"><span><i class=\"fa fa-calendar info\" aria-hidden=\"true\"></i></span></button><ul class=\"dropdown-menu list-group pull-right\" style=\"padding:5px\"><li class=\"list-group-item item-period\" ng-click=\"alterarPeriodo('HOJE');\"><strong>Hoje</strong></li><li class=\"list-group-item item-period\" ng-click=\"alterarPeriodo('SEMANA_ATUAL');\"><strong>Semana Atual</strong></li><li class=\"list-group-item item-period\" ng-click=\"alterarPeriodo('MES_ATUAL');\"><strong>Mês atual</strong></li><li class=\"list-group-item item-period\" ng-click=\"alterarPeriodo('SEMANA_PASSADA');\"><strong>Semana Passada</strong></li><li class=\"list-group-item item-period\" ng-click=\"alterarPeriodo('DESDE_INICIO_ANO');\"><strong>Desde o início do ano</strong></li></ul></span><span ng-show=\"submit\" class=\"input-group-btn\"><button id=\"btn-ok\" ng-disabled=\"mode=='day'\" ng-click=\"submit()\" class=\"btn btn-primary\" style=\"height:42px;  border-bottom-right-radius: 3px!important; border-top-right-radius: 3px!important\">Ok</button></span></div><div ng-show=\"singlePeriod==true\" class=\"input-group\"><input ng-change=\"ngChange()\" placeholder=\"Informe uma data\" style=\"border-left:none\" st-input tipo=\"data\" class=\"form-control\" ng-model=\"singleDate\"></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stSelect.html',
    "<meta charset=\"UTF-8\"><div class=\"form-group\"><label class=\"text-muted\"><i class=\"fa fa-list\"></i> Imposto <a ng-click=\"cadGrupoImposto()\">Cadastrar novo</a></label><select ng-model=\"ngModel\" class=\"form-control\" ng-options=\"item as item[attrLabel] for item in itens track by item.id\"></select></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stSync.html',
    "<meta charset=\"UTF-8\"><div class=\"notification-icon\"><button ng-click=\"sincronizarDados()\" class=\"btn\" style=\"padding:0px\"><span class=\"icon-alert fa fa-refresh\"></span></button></div>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stToggle.html',
    "<meta charset=\"UTF-8\"><label class=\"toggle\"><input ng-disabled=\"ngDisabled\" type=\"checkbox\" ng-model=\"ngModel\"> <span class=\"handle\"></span></label>"
  );


  $templateCache.put('global/st-api/st-util/template-module/stTopMenu.html',
    "<meta charset=\"UTF-8\"><!-- Informações do Usuário --><ul class=\"nav navbar-top-links pull-right item-menu-top\" id=\"menu-topo\" style=\"height: 36px\"><li><network-button-status></network-button-status></li><li><usuario-sistema></usuario-sistema></li></ul>"
  );


  $templateCache.put('global/st-api/st-util/template-module/usuario-sistema/modalEditUsuario.html',
    "<modal-content titulo=\"usuarioSistema.nome||usuarioSistema.login\" modal-instance=\"this\"><div class=\"fomr-control col-lg-3\"><label>Login</label><input ng-model=\"usuarioSistema.login\" class=\"form-control\"></div><div class=\"fomr-control col-lg-3\"><label>Nome</label><input ng-model=\"usuarioSistema.nome\" class=\"form-control\"></div><div class=\"fomr-control col-lg-3\"><label>Senha</label><input type=\"password\" ng-model=\"usuarioSistema.senha\" class=\"form-control\"></div><div class=\"fomr-control col-lg-3\"><label>Repetir senha</label><input type=\"password\" ng-model=\"usuarioSistema.senha2\" class=\"form-control\"></div><div class=\"col-lg-12\"><hr></div><div class=\"pull-right col-lg-3\"><div class=\"input-group\"><span class=\"input-group-btn\"><button ng-click=\"fechar(this)\" class=\"btn btn-default\"><i class=\"fa fa-times\"></i> Fechar</button> </span><span class=\"input-group-btn\"><button ng-click=\"salvar(usuarioSistema,this)\" class=\"btn btn-primary\">Salvar <i class=\"fa fa-floppy-o\"></i></button></span></div></div></modal-content>"
  );


  $templateCache.put('global/st-api/st-util/template-module/usuario-sistema/usuarioSistema.html',
    "<meta charset=\"UTF-8\"><button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> <strong>{{usuarioSistema.nome||usuarioSistema.login|uppercase}}</strong> <span class=\"caret\"></span></button><ul class=\"dropdown-menu list-group pull-right\" style=\"padding:5px\"><li ng-click=\"logOut()\" class=\"list-group-item\">Sair <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></li><li ng-click=\"editarUsuario(usuarioSistema)\" class=\"list-group-item\">Alterar info Usuário <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></li><li ng-click=\"editarFilial(currentFilial)\" class=\"list-group-item\">Alterar info Empresa <i class=\"fa fa-edit\" aria-hidden=\"true\"></i></li></ul>"
  );


  $templateCache.put('global/st-api/test-user/template-module/detalheTestDefinition.html',
    "<meta charset=\"UTF-8\"><modal-content ok-action=\"salvar\" item=\"definition\" titulo=\"definition.titulo||'Execução de Teste'\" modal-instance=\"this\"><div class=\"form-group col-lg-2\"><label>Título do teste</label><input ng-model=\"definition.titulo\" class=\"form-control\"></div><div class=\"form-group col-lg-2\"><label>Nível de dificuldade</label><select ng-model=\"definition.nivelDificuldade\" class=\"form-control\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select></div><div class=\"form-group col-lg-2\"><label>Valor do teste</label><input ui-number-mask=\"2\" ng-model=\"definition.precoTeste\" class=\"form-control\"></div><div class=\"form-group col-lg-6\"><label>Query de verificação do teste</label><textarea ng-model=\"definition.queryVerification\" cols=\"75\" rows=\"5\" class=\"fomr-control\"></textarea></div><div class=\"col-lg-12\"><label>Descrição do teste</label><text-angular ng-model=\"definition.descricao\"></text-angular></div></modal-content>"
  );


  $templateCache.put('global/st-api/test-user/template-module/testUserButton.html',
    "<meta charset=\"UTF-8\"><div class=\"test-user-button ripple\"><a><i ng-show=\"executandoTeste==true\" class=\"fa fa-spinner faa-spin animated\" aria-hidden=\"true\"></i> <i ng-show=\"!executandoTeste || executandoTeste==false\" class=\"fa fa-play\"></i></a></div>"
  );


  $templateCache.put('global/st-api/test-user/template-module/testUserDetalhe.html',
    "<meta charset=\"UTF-8\"><modal-content item=\"definition\" titulo=\"'Execução de Teste'\" modal-instance=\"this\" cancel-action=\"voltar\"><div class=\"col-lg-6\"><table class=\"table st-table modern-table table-striped table-bordered\"><thead><tr><th>TOTAL DE TESTES EXECUTADOS</th><th>SALDO</th></tr></thead><tbody><tr><td><span class=\"destaque-item\">{{quantTests}} testes</span></td><td><strong class=\"text-muted\">R$ {{saldoTestes|number:2}}</strong></td></tr></tbody></table></div><div ng-show=\"definition\"><st-collapse-panel class=\"col-lg-12\" icone=\"'info-circle'\" show=\"true\" titulo=\"definition.titulo\"><div class=\"col-lg-12\"><p ng-show=\"carregandoTest!=false\" class=\"text-muted\"><i class=\"fa fa-refresh faa-spin animated\" aria-hidden=\"true\"></i> Carregando próximo teste.</p><p class=\"text-muted\">Valor a ser pago pela execução do teste: <strong>R$ {{definition.precoTeste|number:2}}</strong></p><div id=\"descricao-teste\"></div></div><div ng-show=\"false\" class=\"col-lg-4\" ng-show=\"executandoTeste==true\"><label><strong>Comentários/Sugestões</strong></label><br><textarea rows=\"3\" cols=\"29\" ng-model=\"comentario\">\r" +
    "\n" +
    "	            \r" +
    "\n" +
    "	       </textarea></div><div class=\"col-lg-4\" ng-show=\"executandoTeste==true\"><label><input type=\"checkbox\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"erroSistema\">Não foi possível executar o teste</label></div><vertical-space></vertical-space><vertical-space></vertical-space><div class=\"col-lg-4 col-xs-6\" ng-show=\"executandoTeste==false || !executandoTeste \"><button ng-click=\"iniciarTeste()\" class=\"btn btn-secondary\"><i class=\"fa fa-play\"></i> Iniciar teste</button></div><div class=\"col-lg-4 col-xs-6\" ng-show=\"executandoTeste==true\"><button ng-click=\"finalizarTeste(comentario, erroSistema)\" class=\"btn btn-primary\"><i class=\"fa fa-check\"></i> Finalizar teste</button></div><div class=\"col-lg-4 col-xs-6\" ng-show=\"executandoTeste==true\"><button ng-click=\"voltar()\" class=\"btn btn-secondary\"><i class=\"fa fa-play\"></i> Continuar teste</button></div></st-collapse-panel></div><div ng-show=\"!definition\"><h3>Não há mais testes para serem executados no momento, por favor, aguarde a inserção de novos testes.</h3><button ng-click=\"getProxTeste()\" class=\"btn btn-primary\">Atualizar</button></div></modal-content>"
  );


  $templateCache.put('global/st-api/test-user/template-module/testeUserResposta.html',
    "<meta charset=\"UTF-8\"><modal-content ok-action=\"salvar\" item=\"test\" titulo=\"'Execução de Teste'\" modal-instance=\"this\"><div class=\"col-lg-2 only-desktop\"></div><div class=\"col-lg-8\"><div class=\"form-group col-lg-12\"><label>Como foi realizar esta tarefa?</label><select ng-model=\"test.nivelDificuldadeFromUser\" class=\"form-control\"><option value=\"4\">Muito Difícil</option><option value=\"3\">Difícil</option><option value=\"2\">Nem fácil nem difícil</option><option value=\"1\">Muito Fácil</option></select></div><div class=\"form-group col-lg-12\"><button class=\"btn btn-secondary\" ng-click=\"salvar()\">Pronto</button></div></div><div class=\"col-lg-2 only-desktop\"></div></modal-content>"
  );


  $templateCache.put('global/st-api/test-user/template-route/testDefinition.html',
    "<meta charset=\"UTF-8\"><vertical-space></vertical-space><div ng-controller=\"stControl\"><div class=\"col-lg-6\"><st-filter-map filter-map-instace=\"filterMapInstance\" busca-especial=\"buscaEspecial\" filtros=\"[\r" +
    "\n" +
    " 	        \r" +
    "\n" +
    " 	        {attr:'titulo',placeholder:'Buscar pelo título do teste]'},\r" +
    "\n" +
    "			{attr:'descricao',placeholder:'Buscar pela descrição do teste'}\r" +
    "\n" +
    "			\r" +
    "\n" +
    "			]\r" +
    "\n" +
    "			\"></st-filter-map></div><button-add ng-click=\"openDetalhe()\"></button-add><vertical-space></vertical-space><vertical-space></vertical-space><div ng-repeat=\"ob in objetos\" class=\"col-lg-4\"><card-list ob=\"ob\" pivo=\"'titulo'\" edit-function=\"openDetalhe\" delete-function=\"deletar\"></card-list></div><vertical-space></vertical-space><vertical-space></vertical-space><st-pagination filter-map-instance=\"filterMapInstance\"></st-pagination></div>"
  );

}]);

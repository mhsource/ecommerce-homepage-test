
$(document).ready(function(){

    "use strict";

    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
	
	var	carrouselitens = '';

	carrouselitens = carrouselitens + '<div class="carousel-item active"><img class="d-block w-100" src="img/banner1.jpg"></div>';	
	carrouselitens = carrouselitens + '<div class="carousel-item"><img class="d-block w-100" src="img/banner2.jpg"></div>';
	carrouselitens = carrouselitens + '<div class="carousel-item"><img class="d-block w-100" src="img/banner3.jpg"></div>';
	carrouselitens = carrouselitens + '<div class="carousel-item"><img class="d-block w-100" src="img/banner4.jpg"></div>';

	
	
   $('.carrouselitens').html(carrouselitens);
   
	var	banner = '';

	banner = banner + '<div class="col-4">';	
    banner = banner + '<div class="hovereffect">';	
    banner = banner + '<img class="img-fluid" src="img/imagem1.jpg">';	
    banner = banner + '<div class="overlay"><a class="info" href="#">Perfumes</a></div>';	
    banner = banner + '</div>';	
    banner = banner + '</div>';	
	
	banner = banner + '<div class="col-4">';	
    banner = banner + '<div class="hovereffect">';	
    banner = banner + '<img class="img-fluid" src="img/imagem2.jpg">';	
    banner = banner + '<div class="overlay"><a class="info" href="#">Maquiagens</a></div>';	
    banner = banner + '</div>';	
    banner = banner + '</div>';	
	
	banner = banner + '<div class="col-4">';	
    banner = banner + '<div class="hovereffect">';	
    banner = banner + '<img class="img-fluid" src="img/imagem3.jpg">';	
    banner = banner + '<div class="overlay"><a class="info" href="#">Plus size</a></div>';	
    banner = banner + '</div>';	
    banner = banner + '</div>';	
	  

   $('.banners').html(banner);
	
	
	   	// barra lateral
	
	
	var	sidebar = '';
	
	sidebar = sidebar + '<div class="col-12"  style="margin-top: 30px">';
	 
	sidebar = sidebar + '<div class="list-group list-group-flush">';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action corpadrao">Masculino</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Camisetas</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Calças</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Bermudas</a>';	
    sidebar = sidebar + '</div>';

	sidebar = sidebar + '<div class="list-group list-group-flush">';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action corpadrao">Feminino</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Camisetas</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Calças</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Shorts</a>';	
    sidebar = sidebar + '</div>';	
	
	sidebar = sidebar + '<div class="list-group list-group-flush">';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action corpadrao">Infantil</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Camisetas</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Calças</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Calçados</a>';	
    sidebar = sidebar + '</div>';
	
	sidebar = sidebar + '<div class="list-group list-group-flush">';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action corpadrao">Eletrônicos</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Celulares</a>';	
    sidebar = sidebar + '<a href="#" class="list-group-item list-group-item-action">Tablets</a>';		
    sidebar = sidebar + '</div>';
	sidebar = sidebar + '</div>';
		
	sidebar = sidebar + '<div class="col-12"  style="margin-top: 20px">';
	sidebar = sidebar + '<div class="hovereffect" >';
    sidebar = sidebar + '<img class="img-fluid" src="img/sidebar1.jpg">';
    sidebar = sidebar + '<div class="overlay">';
    sidebar = sidebar + '<a class="info" href="#">Acessórios</a>';
    sidebar = sidebar + '</div>';
    sidebar = sidebar + '</div>';
    sidebar = sidebar + '</div>';
	
	sidebar = sidebar + '<div class="col-12"  style="margin-top: 20px">';
	sidebar = sidebar + '<div class="hovereffect" >';
    sidebar = sidebar + '<img class="img-fluid" src="img/sidebar2.jpg">';
    sidebar = sidebar + '<div class="overlay">';
    sidebar = sidebar + '<a class="info" href="#">Infantil</a>';
    sidebar = sidebar + '</div>';
    sidebar = sidebar + '</div>';
    sidebar = sidebar + '</div>';
	  
   $('.sidebar').html(sidebar);
   
    // vitrine
	
var	vitrine = '';

var itensvitrine = [
  { caminho: '1', descricao: 'Camiseta 1', valor: '29,00'},
  { caminho: '2', descricao: 'Camiseta 2', valor: '39,00' },
  { caminho: '3', descricao: 'Camiseta 3', valor: '24,00' },
  { caminho: '4', descricao: 'Camiseta 4', valor: '19,00' },
  { caminho: '5', descricao: 'Calça 1', valor: '69,00' },
  { caminho: '6', descricao: 'Calça 2', valor: '79,00' },
  { caminho: '7', descricao: 'Calça 3', valor: '109,00' },
  { caminho: '8', descricao: 'Calça 4', valor: '59,00' },
  { caminho: '9',  descricao: 'Bermuda 1', valor: '49,00' },
  { caminho: '10', descricao: 'Bermuda 2', valor: '38,00' },
  { caminho: '11', descricao: 'Bermuda 3', valor: '56,00' },
  { caminho: '12', descricao: 'Bermuda 4', valor: '75,00' }
];
	
$.each(itensvitrine, function(index, value) {
	
   vitrine = vitrine + '<div class="col-3"  style="margin-top: 10px">';
   vitrine = vitrine + '<div class="hovereffect"><div class="card">';
   vitrine = vitrine + '<img class="card-img-top" src="img/exemplos/item'+value.caminho+'.jpg">';
   vitrine = vitrine + '<div class="overlay" data-id="'+value.caminho+'" ><a class="info detall" href="#">Detalhes</a></div>';
   vitrine = vitrine + '<div class="card-body text-center">';
   vitrine = vitrine + '<p class="card-title">'+value.descricao+'</p>';
   vitrine = vitrine + '<p class="card-text">R$ '+value.valor+'</p>';
   vitrine = vitrine + '</div></div></div></div>';
     
});

   $('.vitrine').html(vitrine);
   
   
 $("body").on("click",".detall",function(){
	 
	 $("#myModal").modal();
	 
 var detalhesvitrine = '';
 var iditem = $(this).parent("div").data('id') - 1;
 
   detalhesvitrine = detalhesvitrine + '<div class="row">';
   
   detalhesvitrine = detalhesvitrine + '<div class="col-8">'; 
   detalhesvitrine = detalhesvitrine + '<img class="img-fluid" src="img/exemplos/item'+itensvitrine[''+iditem+''].caminho+'.jpg"></div>';
      
   detalhesvitrine = detalhesvitrine + '<div class="col-4" data-id="'+iditem+'">'; 
   detalhesvitrine = detalhesvitrine + '<h4 class="card-title">'+itensvitrine[''+iditem+''].descricao+'</h4>';
   detalhesvitrine = detalhesvitrine + '<p class="card-text">R$ '+itensvitrine[''+iditem+''].valor+'</p>';
   detalhesvitrine = detalhesvitrine + '<a class="info btn corpadrao comprars" href="#">Comprar</a>';
   detalhesvitrine = detalhesvitrine + '</div></div>';


   $('.detalhesvitrine').html(detalhesvitrine); 
   
 });  
 
 
  var contador = 0;
 
  $("body").on("click",".comprars",function(){
	 	 
 var minhasacola = '';
 

 
 var idcompra = $(this).parent("div").data('id');
 
   minhasacola = minhasacola + '<div class="media border p-3">';
   minhasacola = minhasacola + '<img src="img/exemplos/item'+itensvitrine[''+idcompra+''].caminho+'.jpg" class="mr-3 mt-3 rounded" style="width:60px;">';
   minhasacola = minhasacola + '<div class="media-body">';
   minhasacola = minhasacola + ' <h4>'+itensvitrine[''+idcompra+''].descricao+'</h4>';
   minhasacola = minhasacola + '<p>R$ '+itensvitrine[''+idcompra+''].valor+'</p>';
   minhasacola = minhasacola + '<button type="button" class="close retiraritem">remover</button></div></div>';
   

   $('.minhasacola').append(minhasacola); 
   contador++;
    $('.minhasacolaconta').html(contador);
   $("#myModal").modal("hide");
	$('.sacola').show();
 }); 
 
   $("body").on("click",".retiraritem",function(){
	contador--;  
	$('.minhasacolaconta').html(contador);
$(this).parent("div").parent("div").remove();	 
 }); 
 
 
   $("body").on("click",".btnenviacli",function(){
	 	 
 var meuatendimento = '';
 
   meuatendimento = meuatendimento + '<div class="media border p-3" style="margin-top: 10px">';
   meuatendimento = meuatendimento + '<div class="media-body">';
   meuatendimento = meuatendimento + '<h4>Cliente</h4>';
   meuatendimento = meuatendimento + '<p>'+$('#txtcliente').val()+'</p>';
   meuatendimento = meuatendimento + '</div></div>';

 
   $('.meuatendimento').append(meuatendimento); 
   
     $('#txtcliente').val('');
     
 }); 
   
	
	
	
});
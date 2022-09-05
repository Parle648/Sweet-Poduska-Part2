window.addEventListener('DOMContentLoaded', function(){
    const burg = document.querySelector('.burger')
    const menu = document.querySelector('.burgElem')

    burg.addEventListener('click', function(){

        menu.classList.toggle('hover')

    })

    const btnLeft = document.querySelector('.arowLeft')
    const btnRight = document.querySelector('.arowRight')

    const FirstItem = document.querySelector('.TtlBacg')
    const twoItem = document.querySelector('.TtlBacg2')


    // righrBtn 
    btnRight.addEventListener('click', function(){
        FirstItem.classList.add('animationNo');

        FirstItem.classList.add('hover');

        twoItem.classList.add('animationYes');

        twoItem.classList.remove('hover');
    })
    //leftBtn
    btnLeft.addEventListener('click', function(){

        twoItem.classList.add('hover');

        FirstItem.classList.remove('animationNo');

        FirstItem.classList.remove('hover');
        FirstItem.classList.add('animationYes');

    })

    //shopElem

    let material = document.querySelectorAll('.MainNavItem')

    const products = document.querySelectorAll('.productBlock')
    const biaz = document.querySelectorAll('.biaz')

    let btnsTypeOf = document.querySelectorAll('.MainNavItem')


    material.forEach(function(i){
        i.addEventListener('click', function(){
            //active buttons TyprOfmaterials

            material.forEach(function(f){
                f.classList.remove('active')
            })
            i.classList.toggle('active')

            //Sorting products
            let name = i.getAttribute('id');

            products.forEach(function(d){
                if(material.classList === 'active'){
                    d.forEach(function(){
                        d.classList.remove('hover')
                    })
                }
                else if(d.getAttribute('type') !== name){
                    d.classList.add('hover')
                }
                else{
                    d.classList.remove('hover')
                }
            })
        })
    })

    let Start = document.querySelector('#ForStart');

    Start.addEventListener('click', function(){
        products.forEach(function(k){
            k.classList.remove('hover')
        })
    })

    // basket

    const basketBtn = document.querySelectorAll('.basket');
    const basketBlock = document.querySelector('.basketBuy');
    const basketWrap = document.querySelector('.basketBlck');
    const numBuy = document.querySelector('.numOfBuy');

    basketBtn.forEach(function(f){
        f.addEventListener('click', function(){
            numBuy.classList.toggle('hover');
            basketBlock.classList.toggle('hover');
            basketWrap.classList.toggle('basketActive');
        })
    })

    const buyBTN = document.querySelectorAll('.buyBtn');
    let block = document.querySelector('.MalingBuy')

    buyBTN.forEach(function(i){
        i.addEventListener('click', function(){

            //button  clicked

            let idIndificate = i.parentNode.getAttribute('id');

            if(i.innerHTML != 'В КОРЗИНЕ'){
                //create Elements

            let container = document.createElement('div');
            let containerBuy = document.createElement('img');
            let titleOfBasket = document.createElement('h2');


            //add cost product
            let costBasket = document.createElement('div');
            let line = document.createElement('span');
            let costReal = document.createElement('span')

            line.textContent = this.parentNode.childNodes[15].textContent;
            line.classList.add('costUnderline')

            costReal.textContent = this.parentNode.childNodes[16].textContent;
            costReal.classList.add('realCostinbusket')

            costBasket.appendChild(line);
            costBasket.appendChild(costReal);
            costBasket.classList.add('margin')

            const hr = document.createElement('hr');
            let BtnBlock = document.createElement('div');
            let numBlock = document.createElement('div');
            let btnPlus = document.createElement('button');
            let btnMinus = document.createElement('button');
            let DeleteBtn = document.createElement('button')


            //Get Elements
            const elements = this.parentNode.childNodes[1].getAttribute('src'),
                  ttl = this.parentNode.childNodes[7],
                  cost = this.parentNode.childNodes[15],
                    btnsWrap = document.querySelector('.cloneNode')


            //Add ClassList For Elements
            container.classList.add('heightBlock');
            container.id = idIndificate

            containerBuy.src = elements;
            containerBuy.classList.add('imgForBuyBlock');
            titleOfBasket.textContent = ttl.textContent;
            titleOfBasket.classList.add('margin');


            BtnBlock.classList.add('blockBtns');
            numBlock.classList.add('ProductsCount');
            numBlock.id = 'countNumber'
            numBlock.textContent = 1
            btnPlus.classList.add('countBtn')
            btnPlus.textContent = '+';
            btnPlus.id = 'btn'
            btnMinus.classList.add('countBtn')
            btnMinus.textContent = '-'
            btnMinus.id = 'btn'
            DeleteBtn.classList.add('deleteBtn')
            DeleteBtn.innerHTML = 'удалить из корзины'
            //BtnBlock = document.querySelector('.blockBtns').cloneNode(true);
            //BtnBlock.classList.add('blockBtns')
            //Add Elements
            block.appendChild(hr);
            block.appendChild(container)
            container.appendChild(containerBuy);
            container.appendChild(titleOfBasket)
            container.appendChild(costBasket);
            container.appendChild(BtnBlock)
            BtnBlock.appendChild(btnMinus)
            BtnBlock.appendChild(numBlock)
            BtnBlock.appendChild(btnPlus)
            container.appendChild(DeleteBtn)
            } else{
                event.stopPropagation
            }

            i.innerHTML = 'В КОРЗИНЕ';

        })
    })

    //count Products in basket

    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'btn'){

            if(e.target.innerHTML== '+' ){
                e.target.previousSibling.innerHTML =  String( Number(e.target.previousSibling.innerHTML) + 1);
              }  else if(e.target.innerHTML== '-' && e.target.nextSibling.innerHTML== '1'){
                e.target.nextSibling.innerHTML = '1'
              } else if (e.target.innerHTML== '-'){
                e.target.nextSibling.innerHTML =  String( Number(e.target.nextSibling.innerHTML) - 1);
              } 

              let realCost = document.querySelectorAll('.realCostinbusket');
              let TotalCost = 0
      
              // рабочий код
              realCost.forEach(function(costs){
                  TotalCost += (Number(costs.innerHTML) * Number(costs.parentNode.nextSibling.childNodes[1].innerHTML))
                  sumResult.innerHTML = String(TotalCost) + 'грн'
              });  

        }
    });

    //delete for basket

    this.document.addEventListener('click', function(g){

        if(g.target && g.target.classList== 'deleteBtn'){

            let deleteHr = g.target.parentNode.previousSibling;
            deleteHr.remove();

            let parentBlock = g.target.parentNode;
            parentBlock.remove();

            // return text by btn
            let countElement = document.querySelectorAll('.productBlock');

            let idParentBlock = g.target.parentNode.getAttribute('id');
            
            countElement.forEach(function(p){
                if(p.getAttribute('id') === idParentBlock){
                    p.querySelector('.buyBtn').innerHTML = 'Купить со скидкой'
                } 
            })
            
        }

    })

    //counter of Number products for basket

    let countProduct = document.querySelector('.numOfBuy');

    function countProducts(e){

        countProduct.innerHTML = document.querySelectorAll('.heightBlock').length;

        if(countProduct.innerHTML != 0){
            countProduct.classList.remove('hover')
        }
    };

    document.addEventListener('click', countProducts);

})

 // COUNT CHECK

 let sumResult = document.querySelector('.sum');

 this.document.addEventListener('click', function(a){

     if(a.target.classList== 'basket' || a.target.classList== 'buyBtn' || a.target.classList== 'deleteBtn' ){

        const basketBuy = document.querySelector('.basketBuy')

        const g = basketBuy.querySelector('.MalingBuy')
        
        let costarr = document.querySelectorAll('#countNumber')

        let realCost = document.querySelectorAll('.realCostinbusket');

              let TotalCost = 0

              // рабочий код
              realCost.forEach(function(costs){
                  TotalCost += (Number(costs.innerHTML) * Number(costs.parentNode.nextSibling.childNodes[1].innerHTML))
                  sumResult.innerHTML = String(TotalCost) + 'грн'
              });
        
     } 

     let  deleteButtons = document.querySelectorAll('.deleteBtn');

     document.addEventListener('click', function(elem){
        if(elem.target.classList== 'deleteBtn'){
            let realCost = document.querySelectorAll('.realCostinbusket');
              let TotalCost = 0

              if(deleteButtons.length = 1){
                document.querySelector('.sum').innerHTML = '0 грн'
                console.log(3)
            } 
      
              // рабочий код
              realCost.forEach(function(costs){
                  TotalCost += (Number(costs.innerHTML) * Number(costs.parentNode.nextSibling.childNodes[1].innerHTML))
                  sumResult.innerHTML = String(TotalCost) + 'грн'
              });  
        }
     })
 })


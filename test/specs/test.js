    describe('amazon\'s tablet', () =>{
        it('find first 15 tablet\s, whose price is smaller than 70$', () => {          
            browser.url("https://www.amazon.com");
            browser.setValue('//*[@id="twotabsearchtextbox"]', "tablet");
            browser.element("//*[@class = 'nav-input']").click()
            let listOfNames = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]/../../../../../../..//a[@class='a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal']/h2").getText();
            let listOfPrices = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]").getText();
            let count = 0;
            for(let i = 0; i<listOfNames.length;i++){
                if (count>=15){
                    break;
                }else if (listOfPrices[i]<70){
                    console.log(listOfNames[i]);
                    count++;
                }
            }
            while (count<15){
                browser.element("//*[@id='pagnNextString']").click()
                let listOfNames = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]/../../../../../../..//a[@class='a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal']/h2").getText();
                let listOfPrices = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]").getText();
                for(let i = 0; i<listOfNames.length;i++){
                    if (count>=15){
                        console.log("Finished!!!!")
                        break;
                    }else if (listOfPrices[i]<70){
                        console.log(listOfNames[i]);
                        count++;
                        }
                    }                            
            }
            
        })
        
        })

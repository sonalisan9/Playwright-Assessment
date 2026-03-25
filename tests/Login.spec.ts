import{test,expect} from '@playwright/test'

test('using getbyRole',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    await page.getByRole('checkbox',{ name:'Accept terms'}).check()

    await page.getByRole('textbox',{name:'Username:'}).fill("Sonali")

    await expect(page.getByRole('heading',{name:'PlaywrightPractice',exact:true})).toBeVisible()
})
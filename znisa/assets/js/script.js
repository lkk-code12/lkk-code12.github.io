$().ready(() => {
    $("#menu_btn_block").click(()=>{
        console.log("success");
        $("body").toggleClass("scroll_block");
        $(".menu_btn_one").toggleClass("bar_one_active");
        $(".menu_btn_two").toggleClass("bar_two_active");
        $(".menu_btn_three").toggleClass("bar_three_active");
        $(".nav_links_head").toggleClass("nav_links_head_active");
    })
})
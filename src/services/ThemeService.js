class ThemeService {

    toggleThem() {

        const icon = document.getElementById('sun');
        if (icon.classList.toggle("mdi-white-balance-sunny")) {
            icon.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/02/98/03/22/360_F_298032209_YD4pFLDyzMyqBzso5xF5USR05hxqGuXf.jpg)"
            icon.style.color = "black"
            icon.style.transition = "1s"
        } else {

            icon.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUemrzoKlfhczr4DjJhRsp6lf11ZrAV39ibp_SGDyx70IvA-GMUGJ6zgr3LoPe2TFVT8&usqp=CAU)"
            icon.style.backgroundSize = "contain"
            icon.style.color = "white"
            icon.style.transition = "1s"
        }
        // icon.style.backgroundPosition = "center"
        // icon.style.backgroundRepeat = "no-repeat"
        // icon.style.color = "white";
        // document.style.add("dark-theme")
        // console.log("adding the class")



    }

}
export const themeService = new ThemeService()

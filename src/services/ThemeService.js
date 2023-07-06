class ThemeService {

    toggleThem() {

        const icon = document.getElementById('sun');
        // icon.style.background = "black";
        icon.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUemrzoKlfhczr4DjJhRsp6lf11ZrAV39ibp_SGDyx70IvA-GMUGJ6zgr3LoPe2TFVT8&usqp=CAU)"
        icon.style.backgroundSize = "contain"
        // icon.style.backgroundPosition = "center"
        // icon.style.backgroundRepeat = "no-repeat"
        // icon.style.color = "white";
        // document.style.add("dark-theme")
        // console.log("adding the class")



    }

}
export const themeService = new ThemeService()

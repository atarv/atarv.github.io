document.addEventListener("DOMContentLoaded", () => {
    const st = document.getElementById("subtitle")
    st.innerHTML = "Hello, world!"
    const titles = ["Software Developer", "Information technology student", "Haskeller", "Huge Nerd"]
    const changeTitle = (i) => {
        st.innerHTML = titles[i]
    }

    changeTitle(0)
    const titleDisplayTime = 8000
    setTimeout(() => {
        st.classList.remove("fade")
    })

    setTimeout(() => {
        st.classList.add("fade")
    }, titleDisplayTime - 1000)

    let i = 0
    setInterval(() => {
        st.classList.remove("fade")
        i = (i + 1) % titles.length
        changeTitle(i)
        setTimeout(() => {
            st.classList.add("fade")
        }, titleDisplayTime - 1000)
    }, titleDisplayTime)
})

export default function NavBar() {
    const links = ["Servicios", "Noticias", "Institucional", "Contacto", "Registrar Pyme"]

    return (
        <nav className="bg-[#0f46f5] shadow  px-8 mx-auto md:flex md:justify-between md:items-center">

            <div className="flex items-center justify-between">
                <a href="#">
                    <img className="w-auto h-10 sm:h-7" src="logo-investigacion.jpg" alt="" />
                </a>    {/* <svg className="text-white w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z" /><path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z" /><path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z" /></svg> */}
            </div>
            <div className="container flex items-center justify-end p-6 mx-auto text-white capitalize ">
                {
                    links.map(link =>
                        <a href={`/${link}`} className="border-b-2 border-transparent transition-colors duration-300 transform hover:text-[#28c3fa] hover:border-[#28c3fa] mx-1.5 sm:mx-6">{link}</a>
                    )
                }
            </div>
        </nav>
    )
}

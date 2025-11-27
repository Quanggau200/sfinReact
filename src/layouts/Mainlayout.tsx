import SliderBar from "./sliderbar";
import {Outlet} from "react-router-dom";
import {usePageTitle} from "../context/pageTitleContext";
import './sliderbar.css'

export default function Mainlayout() {
    const {title} = usePageTitle();
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar bên trái */}
            <SliderBar />

            {/* Phần bên phải */}
            <div className="flex-1 flex flex-col overflow-hidden bg-white">

                <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        {title.map((item, index) => (
                            <div key={index} className="flex items-center">
                                {/* Nếu không phải phần tử đầu tiên thì thêm dấu > */}
                                {index > 0 && (
                                    <span className="mx-2 text-gray-400 font-bold">›</span>
                                )}

                                {/* Phần tử cuối cùng in đậm, các phần tử trước đó màu nhạt */}
                                <span className={index === title.length - 1 ? "font-semibold text-gray-900" : "text-gray-500"}>
                                 {item}
                                  </span>
                            </div>
                        ))}
                    </div>
                </header>
                {/* Nơi chứa nội dung các page con */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
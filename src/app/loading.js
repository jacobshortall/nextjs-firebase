import style from "./page.module.css";

export default function Loading() {
    return (
        <div>
            <span className={style.loader}></span>
        </div>
    );
}

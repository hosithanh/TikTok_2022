import './GlobalStyle.scss';
interface props {
    children: any;
}
export default function GlobalStyles({ children }: props) {
    return children;
}

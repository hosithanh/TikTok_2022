import './Style.css';
interface Props {
    Children: any;
}
export default function Wrapper({ Children }: Props) {
    return <div className="wapper">{Children}</div>;
}

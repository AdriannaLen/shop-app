
import './Header.scss';

const Header = ({children }: any) => {

    return (
        <>
     
<div className="logo">

<p className="logo__header">
    {children}
</p>

</div>
</>
    )
}

export default Header;
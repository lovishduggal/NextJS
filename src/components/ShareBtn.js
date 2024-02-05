'use client';
function ShareBtn() {
    const handleClick = () => {
        alert('Click');
    };
    return <button onClick={handleClick}>click</button>;
}

export default ShareBtn;

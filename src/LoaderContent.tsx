import loadGifImage from './img/dog.gif';

const LoaderContent: React.FC = () => {
    return (
        <div>
            <h1>Carregando...</h1>
            <img src={loadGifImage} alt="Dog"  width="200px" height="auto"/>
        </div>
    )
}

export default LoaderContent;
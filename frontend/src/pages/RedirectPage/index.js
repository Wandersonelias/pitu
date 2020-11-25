import React from 'react';
import Header from '../../components/Header';
import {Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ShortnerService from '../../services/shortnerService';
import {StatsContainer} from './styles';

 
class RedirectPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: '',
            url: '',
            errorMessage: ''

        };

    }

    async componentDidMount(){
        const {code} = this.props.match.params;
        try {
            const service = new ShortnerService();
            const { url } = await service.getLink(code);
            window.location = url;            

        } catch (error) {
            this.setState({isLoading: false, errorMessage: 'Url Solicitada não exite'});
        }
    }
    render(){
        return(
            <Container>
                
                {this.state.errorMessage ? (
                    <>
                        <Header>Seu novo encurtador de urls</Header>
                        <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle"/>
                        <p className="m-3">{this.state.errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encuntar nova Url</a>
                        </StatsContainer>
                    </>
                ): (
                    <p className="text-center">Redirecinando pagina</p>
                )}

            </Container>
        )
    }
}


export default RedirectPage;
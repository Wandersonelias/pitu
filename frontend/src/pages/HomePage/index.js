import React from 'react';
import {Container,FormControl, InputGroup, Button, Alert, Spinner} from 'react-bootstrap';
import shortnerService from '../../services/shortnerService';
import Header from '../../components/Header';
import {Form,ContentContainer,AdsBlock} from './styles';
import ShortnerService from '../../services/shortnerService';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:  false,
            url: '',
            code: '',
            erroMessage: ''
        }
    }

    handlerSubmit = async(event) =>{
        event.preventDefault();
        
        const {url} = this.state;
        this.setState({isLoading: true, erroMessage: ''});


        if(!url){
            this.setState({isLoading: false, erroMessage: 'Informe uma url valida, para encurtar!'});
        }else{
            try {
                const service = new ShortnerService();
                const result = await service.generate({url});
                this.setState({isLoading: false, code: result.code})

            } catch (error) {
                this.setState({isLoading: false, erroMessage: 'Ops deu erro'});
            }
        };
    
    
    }

    copyToClipboard = () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <Container>
                <Header>Seu novo encurtador de URL. :)</Header>
                <ContentContainer>
                    <Form onSubmit={this.handlerSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Digite a Url para encurtar"
                                        defaultValue=""
                                        onChange={e => this.setState({url: e.target.value})}/>
                            <InputGroup.Append>
                                <Button variant="primary" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        
                        </InputGroup>
                        {this.state.isLoading ? (
                            <Spinner animation="border"/>
                        ) : (
                            this.state.code && (
                                <>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                                    autoFocus={true} 
                                                    placeholder="Digite a Url para encurtar"
                                                    defaultValue={`https://pitu.tk/${this.state.code}`}
                                                    ref={(input) => this.inputURL = input} />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" onClick={() => this.copyToClipboard}>Copiar</Button>
                                        </InputGroup.Append>
                        
                                    </InputGroup>
                                    <p>Para acompanhar as estatisticas, acesse <b>{`https://pitu.tk/${this.state.code}`}</b></p>
                                </>
                            )
                        )}
                        {this.state.erroMessage && <Alert variant="danger">{this.state.erroMessage}</Alert>}
                    </Form>
                </ContentContainer>
                <ContentContainer>
                    <AdsBlock>Adsense</AdsBlock>
                </ContentContainer>
            </Container>
        )
    }
}


export default HomePage;
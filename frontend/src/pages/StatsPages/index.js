import React from 'react';
import Header from '../../components/Header';
import {Container} from 'react-bootstrap';
import ShortnerService from '../../services/shortnerService';
import {StatsContainer,StatsRow,StatsBox,StatsTitle} from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
class StatsPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            shotnerURL: {
            },
            errorMessage: ''
            
        };
    }

    async componentDidMount(){
        const {code} = this.props.match.params;
        try {
            const service = new ShortnerService();
            this.state.shotnerURL = await service.getStats(code);
            const parseDate = parseISO(this.state.shotnerURL.updatedAt);
            const currentDate = new Date();

            const relativeDate = formatRelative(parseDate,currentDate,{
                locale: ptBR
            });
            this.state.shotnerURL.relativeDate = relativeDate;
            this.setState({isLoading: false })
        } catch (error) {
            this.setState({isLoading: false, errorMessage: 'Ops a url solicitada não existe'});
        }
    }


    render(){
        return(
            <Container>

            
                <Header>Estatiscas do Link</Header>
                {  this.state.errorMessage ? (
                    <StatsContainer className="text-center">
                            <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle"/>
                            <p className="m-3">{this.state.errorMessage}</p>
                            <a className="btn btn-primary" href="/">Encuntar nova Url</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p><b>https://pitu.tk/{this.state.shotnerURL.code}</b></p>
                        <p>Redireciona para:<br/>{this.state.shotnerURL.url}</p>
                    <StatsRow>
                        <StatsBox>
                            <b>{this.state.shotnerURL.hits}</b>
                            <StatsTitle>Vistas</StatsTitle>
                        </StatsBox>
                        <StatsBox>
                            <b>{this.state.shotnerURL.relativeDate}</b>
                            <StatsTitle>Última visita</StatsTitle>
                        </StatsBox>
                    </StatsRow>
                    <a className="btn btn-primary" href="/">Encuntar nova URL</a>
                    </StatsContainer>
                ) }
                
                </Container>
        )
    }
}

export default StatsPage;
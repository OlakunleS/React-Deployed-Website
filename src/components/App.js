import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {  // Class component used to help us change the state

    state = {
        players: [
            {
                nameid: "Kunle",
                score: 0,
                id: 1
              },
              {
                nameid: "Treasure",
                score: 0,
                id: 2
              },
              {
                nameid: "Ashley",
                score: 0,
                id: 3
              },
              {
                nameid: "James",
                score: 0,
                id: 4
              }
        ]
    };
    // player id counter
    prevPlayerId = 4;
        handleScoreChange = (index, delta) => {
            this.setState(prevState => ({
                score: prevState.players[index].score +=delta
            }));
        }
    handleAddPlayer = (nameid) => {
        this.setState( prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        nameid,
                        score: 0,
                        id: this.prevPlayerId =+ 1
                    }
                ]
            }
        });
    }
    handleRemovePlayer = (id) => {
        this.setState( prevState =>{
            return{
                players: prevState.players.filter( p => p.id !== id)
            };
        });
    } 
    render() {
        return (
            /*defines the props */
            <div className="scoreboard"> 
                <Header 
                    banner="Scoreboard" 
                    players={this.state.players}
                /> 

                {/* Players list */} 
                {this.state.players.map( (player, index) =>
                    <Player 
                        nameid={player.nameid}
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    }
}



export default App;
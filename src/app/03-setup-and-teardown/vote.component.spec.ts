import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let voteComponent: VoteComponent;
  beforeEach(()=>{
    voteComponent = new VoteComponent();
  });

  it('should increment the value of the total.', () => {
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1)
  });
  it('should decrement the value of the total.', () => {
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(-1)
  });
});
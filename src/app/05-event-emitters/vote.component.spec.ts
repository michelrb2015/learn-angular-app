import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should rase voteChanged event when vote', () => {
    let totalVotes: number = 0;

    component.voteChanged.subscribe((tv: number)=>totalVotes = tv);

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});
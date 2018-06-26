describe("Timer", function(){
    it("is our function returning the object?", function(){
        assert.typeOf(getTimeRemaining(), 'object')
    });

    it("settig up timer", function(){
        assert.typeOf(setClock('timer', deadLine), 'string');

    })
    describe('general sum',function(){
        it('is 0 at the start', function(){
            assert.equal(total, 0)
        })
    })
})
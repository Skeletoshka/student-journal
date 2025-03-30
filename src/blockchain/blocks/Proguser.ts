import Block from '../block'

class Proguser extends Block{

    public progUserName: String;

    constructor(progUserName = ''){
        super();
        this.progUserName = progUserName;
    }

    public getData = (): Proguser => {
        return this;
    }

}
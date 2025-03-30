import * as crypto from 'crypto';

abstract class Block {
    private timestamp: Date;
    private chain: Array<Block>;
    private hash: string;
    private prevHash: string;
    // Подключим хеш-функцию sha256.
    SHA256 = (message: string) => crypto.createHash("sha256").update(message).digest("hex");

    constructor(chain = []){
        this.timestamp=new Date();
        this.chain = chain;
        this.hash = '';
        this.prevHash = '';
    }

    //Добавление текущего блока в цепочку блоков
    protected addBlock = () => {
        this.prevHash = this.getLastBlock().hash;
        this.timestamp = new Date();
        let blockData = this.getData();
        this.hash = this.SHA256(this.prevHash + this.timestamp + JSON.stringify(blockData));
        this.chain.push(this)
        return this;
    }

    //Получение транзакций
    abstract getData(): Block;

    //Получение последнего блока
    protected getLastBlock = (): Block => {
        return this.chain[this.chain.length-1]
    }

    //Проверка консенсуса
    public isValid = (): boolean => {
        return true;
    }
}

export default Block;
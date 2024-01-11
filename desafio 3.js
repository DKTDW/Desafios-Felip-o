class Heroi {
    constructor(NomeDoHeroi, idade, classe) {
        this.NomeDoHeroi = NomeDoHeroi;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        let ataque;

        switch (this.classe) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('DragonBorn', 30, 'guerreiro');
const heroi2 = new Heroi('Yuno', 1000, 'mago');
const heroi3 = new Heroi('Jet Li', 32, 'monge');
const heroi4 = new Heroi('Genji', 25, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
import { SketchCollector } from '../../sketchCollector';

export class KiloutouCollector extends SketchCollector {

    static CONFIG = {
        id: "kiloutou",
        name: "Kiloutou",
        description: "i18n.collectors.kiloutou.description",
        version: "0",
        website: "https://kiloutou.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Kiloutou_logo_%28since_2016%29.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        }
    }

    constructor() {
        super(KiloutouCollector.CONFIG);
    }
}

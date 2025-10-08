
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DecathlonCollector extends SketchCollector {

    static CONFIG = {
        id: "decathlon",
        name: "DECATHLON",
        description: "i18n.collectors.decathlon.description",
        version: "1",
        website: "https://www.decathlon.de/login",
        logo: "https://fr.m.wikipedia.org/wiki/Fichier:Decathlon_-_logo_%28France,_2024%29.svg",
        type: CollectorType.SKETCH,
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
        },
        entryUrl: "https://www.decathlon.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DecathlonCollector.CONFIG);
    }
}

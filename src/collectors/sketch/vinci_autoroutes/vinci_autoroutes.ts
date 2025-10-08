
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VinciAutoroutesCollector extends SketchCollector {

    static CONFIG = {
        id: "vinci_autoroutes",
        name: "VINCI Autoroutes",
        description: "i18n.collectors.vinci_autoroutes.description",
        version: "1",
        website: "https://espaceabonnes.vinci-autoroutes.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/9/9c/Logo_Vinci-Autoroutes.svg",
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
        entryUrl: "https://espaceabonnes.vinci-autoroutes.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VinciAutoroutesCollector.CONFIG);
    }
}

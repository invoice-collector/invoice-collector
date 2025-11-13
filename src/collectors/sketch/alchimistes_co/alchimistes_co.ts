import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlchimistesCoCollector extends SketchCollector {

    static CONFIG = {
        id: "alchimistes_co",
        name: "Alchimistes (.co)",
        description: "i18n.collectors.alchimistes_co.description",
        version: "0",
        website: "https://alchimistes.co",
        logo: "https://alchimistes.co/wp-content/uploads/2019/10/ALCH_logo_CMJN-300x116.png",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlchimistesCoCollector.CONFIG);
    }
}

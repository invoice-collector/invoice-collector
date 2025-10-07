import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KoneCollector extends SketchCollector {

    static CONFIG = {
        id: "kone",
        name: "Kone",
        description: "i18n.collectors.kone.description",
        version: "0",
        website: "https://kone.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Kone_Logo_2023.svg",
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
        entryUrl: "https://secure2.anachron.com/kone/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KoneCollector.CONFIG);
    }
}

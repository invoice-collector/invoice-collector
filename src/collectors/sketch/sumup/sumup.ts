import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SumUpCollector extends SketchCollector {

    static CONFIG = {
        id: "sumup",
        name: "Sumup",
        description: "i18n.collectors.sumup.description",
        version: "0",
        website: "https://sumup.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Sumup_logo.svg",
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
        super(SumUpCollector.CONFIG);
    }
}


import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CurrenxieCollector extends SketchCollector {

    static CONFIG = {
        id: "currenxie",
        name: "Currenxie",
        description: "i18n.collectors.currenxie.description",
        version: "0",
        website: "https://app.currenxie.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/796105.jpg",
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
        entryUrl: "https://app.currenxie.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CurrenxieCollector.CONFIG);
    }
}

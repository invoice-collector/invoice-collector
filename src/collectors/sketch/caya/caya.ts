
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CayaCollector extends SketchCollector {

    static CONFIG = {
        id: "caya",
        name: "CAYA",
        description: "i18n.collectors.caya.description",
        version: "0",
        website: "https://usecaya.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29237.jpg",
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
        entryUrl: "https://usecaya.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CayaCollector.CONFIG);
    }
}

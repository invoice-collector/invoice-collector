
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TelenorSeCollector extends SketchCollector {

    static CONFIG = {
        id: "telenor_se",
        name: "Telenor.se",
        description: "i18n.collectors.telenor_se.description",
        version: "0",
        website: "https://minasidor.telenor.se/minasidor/portal/Start.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9570.jpg",
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
        entryUrl: "https://minasidor.telenor.se/minasidor/portal/Start.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelenorSeCollector.CONFIG);
    }
}

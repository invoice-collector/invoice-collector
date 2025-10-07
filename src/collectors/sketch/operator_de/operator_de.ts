
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OperatorDeCollector extends SketchCollector {

    static CONFIG = {
        id: "operator_de",
        name: "Operator.de",
        description: "i18n.collectors.operator_de.description",
        version: "0",
        website: "http://www.telefonkonferenz-operator.de/conference/ng/login.html;jsessionid=9236054249FE742C4E4B3E93A80F8F3C?wicket-crypt=2A0x73ua85w",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9470.jpg",
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
        entryUrl: "http://www.telefonkonferenz-operator.de/conference/ng/login.html;jsessionid=9236054249FE742C4E4B3E93A80F8F3C?wicket-crypt=2A0x73ua85w",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OperatorDeCollector.CONFIG);
    }
}

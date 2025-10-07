
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AtAndTPremierCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t_premier",
        name: "AT&T Premier",
        description: "i18n.collectors.at_and_t_premier.description",
        version: "0",
        website: "https://www.wireless.att.com/business/index.jsp?_requestid=29861",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8537.jpg",
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
        entryUrl: "https://www.wireless.att.com/business/index.jsp?_requestid=29861",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtAndTPremierCollector.CONFIG);
    }
}

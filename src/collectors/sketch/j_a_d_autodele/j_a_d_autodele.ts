
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JADAutodeleCollector extends SketchCollector {

    static CONFIG = {
        id: "j_a_d_autodele",
        name: "J.A.D.-AUTODELE",
        description: "i18n.collectors.j_a_d_autodele.description",
        version: "0",
        website: "http://www.jad.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21983.jpg",
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
        entryUrl: "http://www.jad.dk",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JADAutodeleCollector.CONFIG);
    }
}

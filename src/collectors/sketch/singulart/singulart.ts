
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SingulartCollector extends SketchCollector {

    static CONFIG = {
        id: "singulart",
        name: "singulart",
        description: "i18n.collectors.singulart.description",
        version: "0",
        website: "https://www.singulart.com/my-singulart/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973240.jpg",
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
        entryUrl: "https://www.singulart.com/my-singulart/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SingulartCollector.CONFIG);
    }
}

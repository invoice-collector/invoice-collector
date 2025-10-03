
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrmcoCollector extends SketchCollector {

    static CONFIG = {
        id: "ormco",
        name: "Ormco",
        description: "i18n.collectors.ormco.description",
        version: "0",
        website: "https://aligners.ormcodigital.com/sso/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445899.jpg",
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
        entryUrl: "https://aligners.ormcodigital.com/sso/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrmcoCollector.CONFIG);
    }
}

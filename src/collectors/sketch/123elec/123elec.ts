
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _123elecCollector extends SketchCollector {

    static CONFIG = {
        id: "123elec",
        name: "123elec",
        description: "i18n.collectors.123elec.description",
        version: "0",
        website: "https://www.123elec.com/customer/account/login/referer/aHR0cHM6Ly93d3cuMTIzZWxlYy5jb20v/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/984861.jpg",
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
        entryUrl: "https://www.123elec.com/customer/account/login/referer/aHR0cHM6Ly93d3cuMTIzZWxlYy5jb20v/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_123elecCollector.CONFIG);
    }
}

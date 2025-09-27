
import { SketchCollector } from '../../sketchCollector';

export class MemberspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "memberspace",
        name: "MemberSpace",
        description: "i18n.collectors.memberspace.description",
        version: "0",
        website: "https://admin.memberspace.com/sites/12236",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510874.jpg",
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
        entryUrl: "https://admin.memberspace.com/sites/12236",
    }

    constructor() {
        super(MemberspaceCollector.CONFIG);
    }
}


import { SketchCollector } from '../../sketchCollector';

export class ACloudGuruCollector extends SketchCollector {

    static CONFIG = {
        id: "a_cloud_guru",
        name: "A Cloud Guru",
        description: "i18n.collectors.a_cloud_guru.description",
        version: "0",
        website: "https://acloudguru.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037308.jpg",
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
        entryUrl: "https://acloudguru.com",
    }

    constructor() {
        super(ACloudGuruCollector.CONFIG);
    }
}

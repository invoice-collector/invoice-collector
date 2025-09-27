
import { SketchCollector } from '../../sketchCollector';

export class FattureInCloudItCollector extends SketchCollector {

    static CONFIG = {
        id: "fatture_in_cloud_it",
        name: "Fatture in Cloud.it",
        description: "i18n.collectors.fatture_in_cloud_it.description",
        version: "0",
        website: "https://www.fattureincloud.it/service/form/form-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173522.jpg",
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
        entryUrl: "https://www.fattureincloud.it/service/form/form-login/",
    }

    constructor() {
        super(FattureInCloudItCollector.CONFIG);
    }
}

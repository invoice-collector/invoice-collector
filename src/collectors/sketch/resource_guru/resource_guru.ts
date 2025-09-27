
import { SketchCollector } from '../../sketchCollector';

export class ResourceGuruCollector extends SketchCollector {

    static CONFIG = {
        id: "resource_guru",
        name: "Resource Guru",
        description: "i18n.collectors.resource_guru.description",
        version: "0",
        website: "https://resourceguruapp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71014.jpg",
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
        entryUrl: "https://resourceguruapp.com/login",
    }

    constructor() {
        super(ResourceGuruCollector.CONFIG);
    }
}

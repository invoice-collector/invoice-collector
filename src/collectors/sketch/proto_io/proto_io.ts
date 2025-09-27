
import { SketchCollector } from '../../sketchCollector';

export class ProtoIoCollector extends SketchCollector {

    static CONFIG = {
        id: "proto_io",
        name: "Proto.io",
        description: "i18n.collectors.proto_io.description",
        version: "0",
        website: "https://proto.io/en/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34983.jpg",
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
        entryUrl: "https://proto.io/en/signin/",
    }

    constructor() {
        super(ProtoIoCollector.CONFIG);
    }
}

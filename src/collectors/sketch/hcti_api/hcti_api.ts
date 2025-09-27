
import { SketchCollector } from '../../sketchCollector';

export class HctiApiCollector extends SketchCollector {

    static CONFIG = {
        id: "hcti_api",
        name: "HCTI API",
        description: "i18n.collectors.hcti_api.description",
        version: "0",
        website: "https://auth.htmlcsstoimage.com/u/login?state=g6Fo2SBITVA0eklEVURTU2ZnTkpZNjdEQVo4dlFqWEIwNG5DVKN0aWTZIFNMSWZxUVdQVkdybm5FSjRwVnJ4X0dSY1ZGMFZiTjFwo2NpZNkgeE9HTDJzQ0tPMnJja0psbmtSdm5uVnc3RjZqMXlMQ3E",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534355.jpg",
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
        entryUrl: "https://auth.htmlcsstoimage.com/u/login?state=g6Fo2SBITVA0eklEVURTU2ZnTkpZNjdEQVo4dlFqWEIwNG5DVKN0aWTZIFNMSWZxUVdQVkdybm5FSjRwVnJ4X0dSY1ZGMFZiTjFwo2NpZNkgeE9HTDJzQ0tPMnJja0psbmtSdm5uVnc3RjZqMXlMQ3E",
    }

    constructor() {
        super(HctiApiCollector.CONFIG);
    }
}

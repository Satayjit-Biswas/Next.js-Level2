import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;
const Allnews = ({ allnewsData }) => (
    <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {allnewsData.map((news) => (
                <Col key={news.id} className="gutter-row" span={6}>
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    >
                        <Meta
                            
                            title={news.title}
                            description={news.description}
                        />
                        <Button type="primary"><Link href={`news/${news?.id}`}>More...</Link></Button>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
);
export default Allnews;

import React from "react";
import Flip from 'react-reveal/Flip';
import '../styles/Index.css';

class Introduce1 extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="intro1">
                    <Flip left>
                        <p>�츮 (����Ʈ�̸�)���� ������ �پ��� ��Ʈ�������� Ȯ���غ�����.</p>
                        <p>���ɺо��� ��Ʈ�������� ���� ��ȸ�� �� �ֽ��ϴ�.</p>
                        <p>���� �ٷ� (����Ʈ �̸�)�� �����غ�����.</p>
                    </Flip>
                </div>
                <div className="intro2">
                    <Flip right>
                        <p>�ٸ� ����� ��Ʈ�������� �ǰ��� ����� ���� �����ϸ� �����غ�����.</p>
                        <p>�������������� ������ ��Ʈ�������� ������ �� �ֽ��ϴ�.</p>
                        <p>�־��� ��Ĵ�� �Է¸� �ϸ� �˴ϴ�.</p>
                        <p>������ ��Ʈ�������� pdf ���Ϸ� ���嵵 �����մϴ�.</p>
                    </Flip>
                </div>
            </div>          
        )
    }
}

export default Introduce1;